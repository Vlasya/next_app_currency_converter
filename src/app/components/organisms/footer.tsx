'use client';
import Logo from '@/components/atoms/logo';
import NavLink from '@/components/molecules/navLink';
import { NavLinks, Routs } from '@/app/constants';
import { usePathname } from 'next/navigation';
import InfoBlock from '@/components/molecules/infoBlock';
import phone from '@/images/phone.svg'
import phone_2 from '@/images/phone_2.svg'
import SocialIconLinksBlock from '@/components/molecules/socialIconLinksBlock';

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className='bg-pageBg mt-auto shrink-0'>
      <div className='flex justify-around p-[60px]'>
        <div className='flex flex-col text-baseColor text-xs font-normal '>
          <Logo />
          <div className='mt-[20px]'>04128, м.Київ, вул. Хрещатик, 19</div>
          <div>Ліцензія НБУ №156</div>
          <div>Ⓒ ПАТ ЧіпЧендж, 2019-2023</div>
        </div>
        <div className='flex flex-col text-baseColor text-xs font-normal'>
          <NavLink
            text={NavLinks.Services}
            url={Routs.Services}
            isActive={pathname === Routs.Services}
          />

          <NavLink
            text={NavLinks.Converter}
            url={Routs.ConverterPage}
            isActive={
              pathname === Routs.ConverterPage || pathname === Routs.Converter
            }
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
        </div>

        <InfoBlock
          icon={phone.src}
          title='3773'
          subtitle='Цілодобова підтримка'
          altText='phone'
        />
        <InfoBlock
          icon={phone_2.src}
          title='8 800 111 22 33'
          subtitle='Безкожтовно для дзвінків в межах України'
          altText='phone'
        />
        <SocialIconLinksBlock/>
      </div>
    </footer>
  );
}
