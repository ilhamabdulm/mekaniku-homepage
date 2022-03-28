import { Button, NavLink } from 'components/atoms';

import MekanikuLogo from 'assets/images/mekaniku-logo-black.png';
import { ReactComponent as WAIcon } from 'assets/icons/wa-icon.svg';
import { ReactComponent as UserIcon } from 'assets/icons/user-icon.svg';

const NAV_MENU = [
  { title: 'Beranda', to: '/', isActive: true },
  { title: 'Layanan', to: '/', isActive: false },
  { title: 'Dukungan', to: '/', isActive: false },
  { title: 'Artikel', to: '/', isActive: false },
  { title: 'Tentang Kami', to: '/', isActive: false },
];

const Header = () => {
  return (
    <header className="h-22 flex items-center bg-neutral-900 sticky top-0 z-50">
      <div className="container mx-auto py-2 grid grid-cols-6 gap-x-24">
        <div className="flex items-center cursor-pointer">
          <img src={MekanikuLogo} alt="brand-logo" width={160} height={35} />
        </div>
        <nav className="col-span-3 flex items-center w-full">
          <ul className="flex items-center justify-center w-full gap-20">
            {NAV_MENU?.map((menu, i) => (
              <li key={i + menu.title}>
                <NavLink isActive={menu.isActive}>{menu.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-span-2 flex items-center justify-between gap-8">
          <Button icon={<WAIcon />} variant="whatsapp" size="full">
            Hotline Mekaniku
          </Button>
          <Button icon={<UserIcon />} variant="secondary" size="full">
            Login | Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
