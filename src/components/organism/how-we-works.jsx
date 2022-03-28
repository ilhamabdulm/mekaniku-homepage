import HowToImage from 'assets/images/how-to-image.png';
import { SectionHeader } from 'components/molecules';

const HOW_TO = [
  {
    title: 'Tentukan Pelayanan',
    content:
      'Pelajari lebih jelas bagaimana cara kami bekerja untuk melayani anda.',
  },
  {
    title: 'Konfirmasi Pembayaran',
    content:
      'Lakukan pembayaran layanan Mekanikku untuk melanjutkan langkah dalam melayani servis anda.',
  },
  {
    title: 'Mobil anda diservis',
    content: 'Hebat! tunggu mekanik kami datang dan  menservis mobil anda.',
  },
];

const HowWeWorks = () => {
  return (
    <section className="works my-12">
      <div className="container mx-auto">
        <SectionHeader
          title="Bagaimana Kami Bekerja?"
          description="Pelajari lebih jelas bagaimana cara kami bekerja untuk melayani anda."
        />
        <section className="grid grid-cols-5 gap-24 mt-20">
          <div className="col-span-2 space-y-12">
            {HOW_TO?.map((how, idx) => (
              <div className="grid grid-cols-9 gap-12">
                <div className="col-span-1 w-12 h-12 bg-yellow-500 grid place-content-center text-xl font-bold rounded-md">
                  {idx + 1}
                </div>
                <div className="col-span-8">
                  <h4 className="font-bold text-2xl mb-2">{how?.title}</h4>
                  <p>{how?.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-3 flex items-center justify-center">
            <img src={HowToImage} alt="howto-image" width={729} height={464} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default HowWeWorks;
