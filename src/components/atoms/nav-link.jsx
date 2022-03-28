const NavLink = ({ children, to = '#', isActive }) => {
  return (
    <a
      className={`${
        isActive ? 'text-yellow-500' : 'color-n-600 hover:text-yellow-400'
      } font-semibold`}
      href={to}
    >
      {children}
    </a>
  );
};

export default NavLink;
