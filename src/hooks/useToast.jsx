'use client';

import { useContext } from 'react';

import { ToastContext } from '@/contexts';

const useToast = () => {
  const context = useContext(ToastContext);

  handleErrors(context);

  return context;
};

const handleErrors = (context) => {
  const errors = {
    id: 'useToast must be within Toast.'
  };

  Object.entries(context).forEach(([key, value]) => {
    const errorMessage = errors[key];

    if (errorMessage && !value) throw new Error(errorMessage);
  });
};

export default useToast;
