'use client'

import { ReactElement } from 'react';

interface CardFileProps {
    children: ReactElement
}

function CardFile({children }: CardFileProps) {
  return (
    <div className='bg-white'>
        {children}
    </div>
  );
}

export default CardFile;
