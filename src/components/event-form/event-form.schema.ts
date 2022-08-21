import * as yup from "yup";

export const eventFormSchema = yup
  .object({
    name: yup.string().required(),
    startDate: yup.date().required(),
    endDate: yup.date().required(),
  })
  .required();
