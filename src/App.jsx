import {
  Bursa,
  Form,
  Header,
  Hero,
  HowWeWorks,
  Service,
  Unduh,
  Testimoni,
  Information,
  Footer,
} from 'components/organism';

import './styles/App.scss';

function App() {
  return (
    <main className="root">
      <Header />
      <Hero />
      <Form />
      <Bursa />
      <HowWeWorks />
      <Service />
      <Testimoni />
      <Unduh />
      <Information />
      <Footer />
    </main>
  );
}

export default App;
