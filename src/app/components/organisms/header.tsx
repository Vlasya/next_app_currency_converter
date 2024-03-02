'use client';
import Logo from '@/app/components/atoms/Logo';
import NavLink from '@/app/components/molecules/NavLink';
import ProfileLink from '@/app/components/molecules/ProfileLink';
import { Routs, NavLinks } from '@/app/constants';

import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='bg-pageBg flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-3 sm:py-6 h-91'>
      <nav
        className='relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex items-center justify-between mr-20'>
          <Logo />
        </div>
        <div className=' overflow-hidden  basis-full grow sm:block'>
          <div className='flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7'>
            <NavLink
              text={NavLinks.Services}
              url={Routs.Services}
              isActive={pathname === Routs.Services}
            />

            <NavLink
              text={NavLinks.Converter}
              url={Routs.ConverterPage}
              isActive={pathname === Routs.ConverterPage || pathname === Routs.Converter}
            />

            <NavLink
              text={NavLinks.Contacts}
              url={Routs.Contacts}
              isActive={pathname === Routs.Contacts}
            />

            <NavLink
              text={NavLinks.Help}
              url={Routs.Help}
              isActive={pathname === Routs.Help}
            />

            <div className='flex items-center gap-x-2 sm:ms-auto'>
              <ProfileLink isActive={pathname === Routs.Profile} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
