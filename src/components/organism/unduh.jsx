import Google from 'assets/images/find-on-google-image.png';
import Apple from 'assets/images/find-on-apple-image.png';
import MobileOrnament from 'assets/ornaments/mobile-inbox-ornament.svg';

const Unduh = () => {
  return (
    <section className="unduh">
      <div className="container mx-auto mt-72 mb-8">
        <div className="unduh-card">
          <div>
            <h1 className="font-bold text-5xl leading-tight">
              Unduh aplikasi <span className="underline">Mekanikku</span>{' '}
              sekarang!
            </h1>
            <div className="mt-6 flex items-center gap-4">
              <button>
                <img src={Google} alt="google" />
              </button>
              <button>
                <img src={Apple} alt="apple" />
              </button>
            </div>
          </div>

          <div className="absolute -top-60 right-0">
            <img src={MobileOrnament} alt="ornament" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unduh;
