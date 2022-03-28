import { Button } from 'components/atoms';

import CardSample1 from 'assets/images/car-sample-1.png';
import { CardBursa } from 'components/molecules';

const Bursa = () => {
  return (
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
              <CardBursa
                image={CardSample1}
                price={468564000}
                name="Toyota Innova Venturer 2016"
                specification={{
                  fuel: 'Solar',
                  transmission: 'Manual',
                  capacity: '2200cc',
                }}
                key={x + i}
              />
            ))}
        </section>
      </div>
    </section>
  );
};

export default Bursa;
