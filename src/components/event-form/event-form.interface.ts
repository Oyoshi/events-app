export type EventFormData = {
  name: string;
  startDate: Date;
  endDate: Date;
};

export interface EventFormProps {
  onSubmit: (data: EventFormData) => void;
}
