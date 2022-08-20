export type FormData = {
  eventName: string;
  eventStartDate: Date;
  eventEndDate: Date;
};

export interface EventFormProps {
  onSubmit: (data: FormData) => void;
}
