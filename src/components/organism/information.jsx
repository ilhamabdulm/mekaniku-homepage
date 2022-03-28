import { SectionHeader } from 'components/molecules';

import SampleImage from 'assets/images/sample-image.png';
import InfoOrnament from 'assets/ornaments/information-ornament.svg';

const Information = () => {
  return (
    <section className="information my-20 relative">
      <div className="container mx-auto">
        <SectionHeader
          title="Info Terkini"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus id massa ultricies libero."
        />

        <article className="grid grid-cols-2 mt-16 gap-24">
          <div className="w-auto">
            <div className="fit-content space-y-4 w-full">
              <img
                src={SampleImage}
                alt="sample-1"
                width={540}
                height={355}
                className="w-full"
              />
              <div className="space-y-1">
                <h4 className="font-bold text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <p className="text-md text-neutral-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                  mi nisl eros odio quis sed gravida. Tempus, justo tortor amet,
                  fermentum malesuada. Auctor elit etiam lorem ipsum dolor sit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            {Array(3)
              ?.fill('x')
              .map((x, i) => (
                <div className="flex gap-4 py-4" key={'x - ' + i}>
                  <img
                    src={SampleImage}
                    alt="sample-1"
                    width={200}
                    height={200}
                    className="w-32 h-32"
                  />
                  <div className="space-y-1">
                    <h4 className="font-bold text-xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h4>
                    <p className="text-md text-neutral-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quam mi nisl eros odio quis sed gravida. Tempus, justo
                      tortor amet, fermentum malesuada. Auctor elit etiam lorem
                      ipsum dolor sit.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </article>
      </div>

      <div className="absolute right-0 top-52 -z-10">
        <img src={InfoOrnament} alt="ornament-2" />
      </div>
    </section>
  );
};

export default Information;
