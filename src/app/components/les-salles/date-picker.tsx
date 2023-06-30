import React from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

export const DatePicker: React.FC = () => {
  const [value, setValue] = React.useState<any>({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });

  const handleValueChange = (newValue: any) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  React.useEffect(() => {
    const datepickerContainer = document.querySelector('#datepicker-container');
    const inputContainer = datepickerContainer?.children[0];
    const input = inputContainer?.children[0];

    datepickerContainer &&
      inputContainer &&
      input &&
      input?.setAttribute(
        'class',
        'relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20'
      );
  }, []);

  return (
    <div id="datepicker-container" className="none bg-white">
      <Datepicker
        i18n="fr"
        primaryColor="blue"
        displayFormat="DD/MM/YYYY"
        separator="-"
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
};
