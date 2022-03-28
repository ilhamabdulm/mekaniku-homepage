import { Bursa, Form, Header, Hero } from 'components/organism';

import './styles/App.scss';

function App() {
  return (
    <main className="root">
      <Header />
      <Hero />
      <Form />
      <Bursa />
      <section className="works my-8">
        <div className="container mx-auto">
          <header>
            <h1 className="relative text-5xl font-bold text-center mb-12">
              Bagaimana Kami Bekerja?
              <div className="relative mt-8 h-2 w-16 bg-yellow-500 inset-1/2 -translate-x-1/2 rounded-lg"></div>
            </h1>
            <p className="font-semibold text-neutral-500 text-center text-lg">
              Pelajari lebih jelas bagaimana cara kami bekerja untuk melayani
              anda.
            </p>
          </header>
        </div>
      </section>
    </main>
  );
}

export default App;
