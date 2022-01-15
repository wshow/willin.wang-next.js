import type { ReactNode } from 'react';
import Drawer from './navbar/drawer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div id='background' className='dark:dark-bg'></div>{' '}
      <div
        id='app'
        className='relative pt-8 px-8 w-full mx-auto max-w-screen-2xl'>
        {children}
      </div>
      <Drawer />
    </>
  );
}
