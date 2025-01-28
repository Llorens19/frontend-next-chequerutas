import { ISelectProps } from '@/interfaces/components/selects/Select.interface';
import React from 'react';


const SelectForm= ({label, id, options, data, error = '', placeholder = '', onDataChange}:ISelectProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onDataChange(event.target.value);
    };

    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="text-white">
                {label}
            </label>
            <select
              id={id}
              value={data}
              onChange={handleChange}
              className={`bg-color3 text-ms text-white p-2 rounded-lg ${error ? 'border-2 border-red-500' : 'border-2'}`}
            >
              <option value="" disabled>
                {placeholder}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default SelectForm;
