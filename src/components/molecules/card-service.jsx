const CardService = (props) => {
  const { icon, title, content } = props;

  return (
    <div className="bg-white shadow-md py-8 px-4 w-80 h-80 rounded-xl  gap-8">
      <div className="flex items-center justify-center mb-8">
        <div className="w-20 h-20 rounded-lg bg-yellow-500 grid place-content-center">
          <img src={icon} alt="services-icon" className="w-8 h-8" />
        </div>
      </div>
      <div className="text-center space-y-2">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-neutral-500 font-semibold">{content}</p>
      </div>
    </div>
  );
};

export default CardService;
