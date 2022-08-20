import { FC } from "react";
import { Box, TextField, Button } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "hooks";
import { selectEvent } from "store/reducers";
import { EventFormProps } from "./event-form.interface";

const EventForm: FC<EventFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation();

  const params = useParams();

  const event = useAppSelector((state) => selectEvent(state, params.id));

  const navigate = useNavigate();

  const handleOnCancel = () => navigate("/events");

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: event?.name || "",
      startDate: event?.startDate || new Date(),
      endDate: event?.endDate || new Date(),
    },
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
                  inputFormat="dd-MM-yyyy"
                  renderInput={(params) => <TextField {...params} />}
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
                  inputFormat="dd-MM-yyyy"
                  renderInput={(params) => <TextField {...params} />}
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
