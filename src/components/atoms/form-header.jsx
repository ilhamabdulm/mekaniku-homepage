const FormHeader = (props) => {
  const { title } = props;

  return (
    <div className="flex items-center my-4">
      <h3 className="font-bold text-2xl w-2/12">{title}</h3>
      <div className="w-10/12 bg-neutral-500" style={{ height: '1px' }}></div>
    </div>
  );
};

export default FormHeader;
