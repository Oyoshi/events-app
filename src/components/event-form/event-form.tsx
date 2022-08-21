import { FC } from "react";
import { Box, TextField, Button } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "hooks";
import { selectEvent } from "store/reducers";
import { eventFormSchema } from "./event-form.schema";
import { EventFormProps } from "./event-form.interface";

const EventForm: FC<EventFormProps> = ({ onSubmit, eventId }) => {
  const { t } = useTranslation();

  const event = useAppSelector((state) => selectEvent(state, eventId));

  const navigate = useNavigate();

  const handleOnCancel = () => navigate("/events");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: event?.name || "",
      startDate: event ? new Date(event.startDateTimeStamp) : new Date(),
      endDate: event ? new Date(event.endDateTimeStamp) : new Date(),
    },
    resolver: yupResolver(eventFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                id="name"
                label={t("event-name")}
                variant="standard"
                error={errors.name !== undefined}
                helperText={errors.name?.message}
                {...field}
              />
            )}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt: 4,
            }}
          >
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DesktopDatePicker
                  label={t("event-start-date")}
                  inputFormat="dd.MM.yyyy"
                  renderInput={(params) => (
                    <TextField
                      error={errors.startDate !== undefined}
                      helperText={errors.startDate?.message}
                      {...params}
                    />
                  )}
                  {...field}
                />
              )}
            />
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <DesktopDatePicker
                  label={t("event-end-date")}
                  inputFormat="dd.MM.yyyy"
                  renderInput={(params) => (
                    <TextField
                      error={errors.endDate !== undefined}
                      helperText={errors.endDate?.message}
                      {...params}
                    />
                  )}
                  {...field}
                />
              )}
            />
          </Box>
          <Box
            sx={{
              mt: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "flex-end",
                gap: 2,
              }}
            >
              <Button variant="contained" onClick={handleOnCancel}>
                {t("cancel")}
              </Button>
              <Button variant="contained" type="submit">
                {t("save")}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default EventForm;
