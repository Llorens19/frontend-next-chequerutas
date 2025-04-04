import { IInputTextFormProps } from '@/shared/interfaces/components/inputs/inputTextForm.interface';
import React from 'react';

const InputTextForm = ({label, type = 'text', id, placeholder = '',data, error = '', readonly = false, onChange }: IInputTextFormProps) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-text3">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={data}
        onChange={(element) => onChange(element.target.value)}
        readOnly={readonly}
        className={`bg-color1 border-2 text-text1 p-2 rounded-3xl  border-text1${
          error ? 'border-2 border-red-500' : ''
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputTextForm;
