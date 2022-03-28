import { CardService, SectionHeader } from 'components/molecules';

import ServicesOrnament from 'assets/ornaments/services-ornament.svg';
import ServiceIcon from 'assets/icons/service-icon.svg';
import PerawatanIcon from 'assets/icons/perawatan-icon.svg';
import BursaIcon from 'assets/icons/bursa-icon.svg';
import SparepartIcon from 'assets/icons/sparepart-icon.svg';

const SERVICES = [
  {
    icon: ServiceIcon,
    title: 'Servis Mobil',
    content:
      'Layanan servis berkala seperti ganti oli, Tune Up, cek kelistrikan lampu, klakson dan cek kaki kaki.',
  },
  {
    icon: PerawatanIcon,
    title: 'Perawatan Interior Eksterior',
    content:
      'Layanan perawatan pada interior dan eksterior seperti Detailing, Coating, Fogging dan Fumigator',
  },
  {
    icon: BursaIcon,
    title: 'Bursa Mobil',
    content:
      'Layanan bursa jual beli mobil bekas pilihan terbaik dan bergaransi.',
  },
  {
    icon: SparepartIcon,
    title: 'Bursa & Sparepart',
    content:
      'Layanan pembelian aksesoris, onderdil dan sparepart mobil orisinil.',
  },
];

const Services = () => {
  return (
    <section className="services relative">
      <div className="container mx-auto ">
        <SectionHeader
          title="Layanan Kami"
          description="Beberapa layanan pilihan yang sudah disediakan untuk mempermudah masalah anda."
        />

        <article className="carousel z-40 my-12 flex items-center justify-between">
          {SERVICES?.map((service, idx) => (
            <CardService {...service} key={idx + service?.title} />
          ))}
        </article>
      </div>
      <div className="absolute left-0 top-2" style={{ zIndex: -1 }}>
        <img src={ServicesOrnament} alt="services-ornament" />
      </div>
    </section>
  );
};

export default Services;
