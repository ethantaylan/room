import React from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

export interface Dates {
  endDate: string;
  startDate: string;
}

export interface DatepickerProps {
  value: any;
  handleValueChange: () => void;
}

export const DatepickerComponent: React.FC<DatepickerProps> = ({
  value,
  handleValueChange
}) => {
  return <Datepicker value={value} onChange={handleValueChange} />;
};
