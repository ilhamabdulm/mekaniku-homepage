import HeroImage from '../../assets/images/hero-image.png';

const Hero = () => {
  return (
    <section className="hero">
      <article className="container mx-auto grid grid-cols-2 gap-8 ">
        <div className="flex flex-col gap-10 col-span-1 w-8/12 mt-20">
          <h1 className="text-neutral-900 text-5xl font-bold leading-relaxed">
            Layanan Bengkel Online Dengan Mekanik Professional
          </h1>
          <p className="text-neutral-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lectus id massa ultricies libero. Facilisi et volutpat ac, nunc
            dolor lacinia aliquam nibh.
          </p>
        </div>
        <div className="col-span-1 mt-12 flex justify-end">
          <img src={HeroImage} width={658} height={48} />
        </div>
      </article>
    </section>
  );
};

export default Hero;
