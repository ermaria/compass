'use client'
import { Icons } from '@/utils/constants';
import React, { FunctionComponent, InputHTMLAttributes, ReactElement, ReactNode, useState} from 'react';
import Button from './Button';


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  iconKey?: keyof typeof Icons; // Use keyof typeof to ensure the key exists in Icons
  title?: string; // Assuming title is always a string
  type?: string;
  placeholder?: string;
  passwordIcon?: keyof typeof Icons; 
  showIcon?: keyof typeof Icons;
  hideIcon?: keyof typeof Icons;
  pass?: boolean;
};

const Input: FunctionComponent<InputProps> = ({ iconKey, pass, showIcon, hideIcon, passwordIcon, type, title, placeholder, ...rest }) => {
  const IconComponent = iconKey ? Icons[iconKey] : null;
  const PasswordIcon = passwordIcon ? Icons[passwordIcon] : null;
  const [visible, setVisible] = useState (false);
  const PassIcon = passwordIcon? Icons[passwordIcon] : null;
  


  
  return (
    <div className="mb-4">
      {title && (
        <div className="mb-1">
          <label htmlFor={title} className="text-sm font-semibold text-gray-700">
            {title}
          </label>
        </div>
      )}
      <div className="flex items-center border border-gray-300 rounded-md shadow-sm overflow-hidden">
        {IconComponent && (
          <span className="inline-flex items-center px-3 border-r border-gray-300 text-gray-500">
            <IconComponent className="h-5 w-5"  />
          </span>
        )}

        <input
          {...rest}
          type={visible ? "text" : "password"}
          id={title}
          placeholder={placeholder}
          className="w-full border-none p-3 text-sm focus:ring-0"
          style={{ boxShadow: 'none' }} // This ensures that the input doesn't have an inner shadow
          
        />
        
        {PassIcon && (
          <span className="inline-flex items-center px-3 border-r border-gray-300 text-gray-500">
            <PassIcon className="h-5 w-5" onClick={() => setVisible(!visible)}  />

          </span>
        )}
       
      </div>
    </div>
  );
};

export default Input;
