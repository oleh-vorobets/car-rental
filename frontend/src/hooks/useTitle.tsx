import { useEffect } from 'react';

export const useTitle = (
  title: string = 'Hooli - your best car rental company!'
) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
