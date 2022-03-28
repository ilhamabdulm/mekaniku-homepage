const SectionHeader = (props) => {
  const { title, description } = props;

  return (
    <header>
      <h1 className="relative text-5xl font-bold text-center mb-12">
        {title}
        <div className="relative mt-8 h-2 w-16 bg-yellow-500 inset-1/2 -translate-x-1/2 rounded-lg"></div>
      </h1>
      <p className="font-semibold text-neutral-500 text-center text-xl">
        {description}
      </p>
    </header>
  );
};

export default SectionHeader;
