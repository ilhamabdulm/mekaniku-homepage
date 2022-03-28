const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  whatsapp: 'btn-whatsapp',
};

const Button = (props) => {
  const { children, variant, icon, size, ...otherProps } = props;

  return (
    <button {...otherProps} className={variants[variant]} data-size={size}>
      {icon || null} Login | Register
    </button>
  );
};

export default Button;
