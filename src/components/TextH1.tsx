import React from 'react';

interface ITextH1 {
    children: string
    className?: string
}

const TextH1: React.FC<ITextH1> = ({ children, className= "" }) => {
    return (
        <h1 className={`text-center text-2xl text-green ${className}`}>{children}</h1>
    );
};

export default TextH1;
