import { useState, useEffect, useRef } from 'react';

function useClickOutside(initialState: boolean = false) {
  const [open, setOpen] = useState(initialState);
  const [clickedRowIndex, setClickedRowIndex] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, setOpen]);

  return { open, ref, setOpen, clickedRowIndex, setClickedRowIndex };
}

export default useClickOutside;
