'use client';
import { IInputSelectFormProps } from '@/shared/interfaces/components/inputs/InputSelectForm.interface';
import React from 'react';



const InputSelectForm = ({ label, id, options, data, error, placeholder, onChange }:IInputSelectFormProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-text3">
        {label}
      </label>
      <select
        id={id}
        className={`bg-color1 border-2 text-text1 border-text1 p-2 rounded-lg  ${error ? 'border border-red-500' : ''}`}
        value={data}
        onChange={(e) => onChange(e.target.value)}
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

export default InputSelectForm;
