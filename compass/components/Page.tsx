import React, { ReactNode } from 'react';

interface PageInterface {
    children: ReactNode;
}

const Page: React.FC<PageInterface> = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {children}
        </div>
    );
};

export default Page;