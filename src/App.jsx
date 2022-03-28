import { Header, Hero } from 'components/organism';

import ServiceIcon from './assets/icons/service-icon.svg';
import PerawatanIcon from './assets/icons/perawatan-icon.svg';
import BursaIcon from './assets/icons/bursa-icon.svg';
import SparepartIcon from './assets/icons/sparepart-icon.svg';
import TroubleshootIcon from './assets/icons/troubleshoot-icon.svg';
import { ReactComponent as SolidCheckIcon } from './assets/icons/solid-check-icon.svg';

import './styles/App.scss';

const SERVICE_ITEM = [
  {
    name: 'Servis Berkala',
    icon: ServiceIcon,
    isSelected: true,
  },
  {
    name: 'Perawatan',
    icon: PerawatanIcon,
    isSelected: false,
  },
  {
    name: 'Bursa Mobil',
    icon: BursaIcon,
    isSelected: false,
  },
  {
    name: 'Sparepart',
    icon: SparepartIcon,
    isSelected: false,
  },
  {
    name: 'Troubleshoot',
    icon: TroubleshootIcon,
    isSelected: false,
  },
];

function App() {
  return (
    <main className="root">
      <Header />
      <Hero />
      <section className="form">
        <article className="container mx-auto">
          <div className="card">
            <header className="p-5 bg-neutral-100 grid grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-neutral-500">Mulai dari sekarang</p>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Pilih Layananmu
                </h3>
              </div>
              <div className="flex items-center justify-center gap-3">
                {SERVICE_ITEM?.map((item, i) => {
                  const selectedClass = item.isSelected
                    ? `border-yellow-500`
                    : 'border-white';

                  return (
                    <div
                      key={i + item.name}
                      className={`relative flex flex-col gap-1 items-center bg-white rounded-lg px-6 py-4 shadow-sm cursor-pointer border ${selectedClass} hover:border-yellow-500`}
                    >
                      <div className="w-11 h-11 bg-yellow-500 rounded-full flex items-center justify-center">
                        <img src={item.icon} width={24} height={24} />
                      </div>
                      <p className="font-semibold">{item.name}</p>
                      {item.isSelected ? (
                        <div className="absolute top-2 right-2">
                          <SolidCheckIcon />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </header>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
