import { Button } from 'components/atoms';
import { Form, Header, Hero } from 'components/organism';

import CardSample1 from 'assets/images/car-sample-1.png';

import './styles/App.scss';

function App() {
  return (
    <main className="root">
      <Header />
      <Hero />
      <Form />
      <section className="bursa">
        <div className="container mx-auto">
          <header className="flex items-center justify-between">
            <h2 className="font-bold text-3xl">Bursa Mobil</h2>
            <Button variant="primary">Lihat Semua Bursa</Button>
          </header>
          <section className="mt-8 grid grid-cols-4 gap-8">
            {Array(8)
              .fill('x')
              ?.map((x, i) => (
                <div className="bursa-card" key={'bursa-' + i}>
                  <img src={CardSample1} alt="car" width={223} height={128} />
                  <div className="mt-3">
                    <h3 className="text-lg font-semibold">
                      Rp{(468564000).toLocaleString('id')}
                    </h3>
                    <p className="text-xs font-semibold">
                      Toyota Innova Venturer 2016
                    </p>
                  </div>

                  <div className="border-y border-neutral-300 mt-3 p-1 flex items-center justify-between">
                    <p className="text-xs text-neutral-500">Solar</p>
                    <p className="text-xs text-neutral-500">Manual</p>
                    <p className="text-xs text-neutral-500">2200cc</p>
                  </div>
                </div>
              ))}
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
