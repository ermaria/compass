import React, { FunctionComponent, InputHTMLAttributes, ReactNode } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
};

const Input: FunctionComponent<InputProps> = ({ icon, ...rest }) => {
  return (
    <div className="mb-4 flex items-center" style={{ '--input-padding': icon ? '0' : 'var(--spacing-3)' }}>
    {icon && <span className="p-2">{icon}</span>}
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${icon ? 'pl-0' : ''}`}
      style={{
        '--shadow-default': 'var(--shadow-default)',
        '--shadow-focus': 'var(--shadow-focus)',
        '--border-radius': 'var(--border-radius)',
        '--border-width': 'var(--border-width)',
        '--font-color': 'var(--font-color)',
        'paddingLeft': 'var(--input-padding)',
      }}
      {...rest}
    />
  </div>
  );
};

export default Input;
