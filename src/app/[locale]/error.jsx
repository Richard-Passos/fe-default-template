'use client';

import { useContext } from 'react';

import { ErrorContext } from '@/contexts';
import { ErrorView } from '@/components/views';

const ErrorPage = (props) => {
  const data = useContext(ErrorContext);

  return (
    <ErrorView
      data={data}
      {...props}
    />
  );
};

export default ErrorPage;
