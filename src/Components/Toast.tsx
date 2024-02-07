import React from 'react';
import '../App.css'; 

type ToastProps = {
    message: string;
    isVisible: boolean;
    };

const Toast = ({ message, isVisible }: ToastProps) => {
  return (
    <div className={`toast ${isVisible ? 'show' : ''}`}>
      {message}
    </div>
  );
};

export default Toast;
