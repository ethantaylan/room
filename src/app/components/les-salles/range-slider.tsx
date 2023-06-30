import React from 'react';

export interface RangeSliderProps {
  className: string

}

export const RangeSlider: React.FC<RangeSliderProps> = ({ className }) => {

  const [value, setValue] = React.useState<number>(0)

  const handleChange = (value: any) => {
    setValue(value);
  };

  return (
    <div className={className}>
      <label
        htmlFor="default-range"
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        Prix
      </label>
      <input
        min={0}
        max={5000}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)}
        id="default-range"
        type="range"
        value={value}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-slant-200"
      />
      <p className='mt-4 text-slate-700 text-center'>{value} €</p>
    </div>
  );
};
