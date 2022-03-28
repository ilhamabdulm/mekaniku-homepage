import { CardTestimoni, SectionHeader } from 'components/molecules';

import ProfileImage from 'assets/images/profile-sample-image.png';

const TESTIMONI = [
  {
    name: 'Alfonso Vetrovs',
    text: 'Gokil, gk perlu nunggu lama mekanik udah dateng kerumah padahal rumahku pelosok hahaha',
    picture: ProfileImage,
    current: false,
  },
  {
    name: 'Craig George',
    text: 'Gokil, gk perlu nunggu lama mekanik udah dateng kerumah padahal rumahku pelosok hahaha',
    picture: ProfileImage,
    current: true,
  },
  {
    name: 'Zaire Culhane',
    text: 'Gokil, gk perlu nunggu lama mekanik udah dateng kerumah padahal rumahku pelosok hahaha',
    picture: ProfileImage,
    current: false,
  },
];

const Testimoni = () => {
  return (
    <section className="testimoni">
      <div className="container mx-auto">
        <SectionHeader
          title="Testimoni"
          description="Beberapa review testimoni klien yang sudah berlangganan dengan Mekanikku."
        />

        <article className="my-16 flex items-center justify-between">
          {TESTIMONI?.map((testi, idx) => (
            <CardTestimoni testi={testi} />
          ))}
        </article>
      </div>
    </section>
  );
};

export default Testimoni;
