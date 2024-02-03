import { FunctionComponent, ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void; // make the onClick handler optional
};

const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => {
    return (
        <button
        className="px-4 py-2 font-bold text-white bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-opacity-var focus:ring-color-var"
        onClick={onClick}
        style={{
          '--ring-opacity-var': `var(--ring-opacity)`,
          '--ring-color-var': `rgba(var(--ring-color), var(--ring-opacity))`
        }}
        >
            {children}
        </button>
    );
};
export default Button;
