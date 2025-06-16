import { useEffect, useState } from 'react';

type UseDebounceProps = {
  value: string;
  delay: number;
};

export const useDebounce = ({ value, delay }: UseDebounceProps) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};
