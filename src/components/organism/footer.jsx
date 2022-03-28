import { Button } from 'components/atoms';

import LogoNormal from 'assets/images/mekaniku-logo-normal.png';
import FBIcon from 'assets/icons/fb-icon.svg';
import TWIcon from 'assets/icons/tw-icon.svg';
import IGIcon from 'assets/icons/ig-icon.svg';
import WAIcon from 'assets/icons/wa-large-icon.svg';

const Footer = () => {
  return (
    <section className="footer relative">
      <div className="absolute right-44 -top-16 flex flex-col items-center">
        <button>
          <img src={WAIcon} alt="wa-large" />
        </button>
        <p className="text-green-500 font-bold">Hotline Mekanikku</p>
      </div>

      <div className="footer-content">
        <div className="pt-44">
          <img src={LogoNormal} alt="logonormal" width={255} height={53} />
          <article className="grid grid-cols-3 gap-8 mt-8">
            <div className="space-y-3">
              <h5 className="font-bold text-xl">Mekanikku</h5>
              <p className="font-semibold">
                Ruko Grand Galaxy Bekasi <br />
                Blok RSA 1 No 37 Lantai 2 <br />
                Bekasi Selatan 17148
              </p>
              <div className="flex items-center -ml-7">
                <button>
                  <img src={FBIcon} alt="fb" />
                </button>
                <button>
                  <img src={TWIcon} alt="tw" />
                </button>
                <button>
                  <img src={IGIcon} alt="ig" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-bold text-xl">Sitemap</h5>
              <div className="space-y-2">
                <p className="font-semibold underline leading-relaxed cursor-pointer">
                  Tentang Kami
                </p>
                <p className="font-semibold underline leading-relaxed cursor-pointer">
                  Kontak Kami
                </p>
                <p className="font-semibold underline leading-relaxed cursor-pointer">
                  Syarat & Ketentuan
                </p>
                <p className="font-semibold underline leading-relaxed cursor-pointer">
                  FAQ
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl space-y-4">
              <h4 className="font-bold text-2xl">Dapatkan Info Terbaru</h4>
              <p className="text-neutral-500 font-semibold">
                Tetap dapatkan informasi maupun event terbaru dengan
                berlangganan Newsletter
              </p>
              <input
                type="text"
                className="form-input w-full rounded-lg focus:ring-yellow-500 active:ring-yellow-500"
              />
              <Button size="full" variant="primary">
                Berlangganan
              </Button>
            </div>
          </article>
        </div>
      </div>
      <footer className="bg-neutral-900 w-full h-22 text-center flex items-center justify-center">
        <p className="font-bold text-white text-lg">
          Mekanikku 2022. All Right Reserved
        </p>
      </footer>
    </section>
  );
};

export default Footer;
