import { Button, SelectInput, TextInput, FormHeader } from 'components/atoms';

import ServiceIcon from 'assets/icons/service-icon.svg';
import PerawatanIcon from 'assets/icons/perawatan-icon.svg';
import BursaIcon from 'assets/icons/bursa-icon.svg';
import SparepartIcon from 'assets/icons/sparepart-icon.svg';
import TroubleshootIcon from 'assets/icons/troubleshoot-icon.svg';
import { ReactComponent as SolidCheckIcon } from 'assets/icons/solid-check-icon.svg';

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

const Form = () => {
  return (
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

          <forn>
            <section className="px-5 py-5">
              <FormHeader title="Waktu Servis" />

              <div className="grid grid-cols-2 gap-8">
                <TextInput
                  label="Atur Tanggal"
                  placeholder="Atur tanggal servis"
                  name="date"
                />
                <TextInput
                  label="Atur Jam"
                  placeholder="Atur jam servis"
                  name="time"
                />
              </div>
            </section>

            <section className="px-5 py-5">
              <FormHeader title="Informasi Mobil" />

              <div className="grid grid-cols-2 gap-8">
                <SelectInput
                  label="Merk"
                  placeholder="Pilih merk mobil"
                  name="merk"
                />
                <SelectInput
                  label="Model"
                  placeholder="Pilih model mobil"
                  name="model"
                />
                <SelectInput
                  label="Tahun"
                  placeholder="Pilih tahun mobil"
                  name="year"
                />
                <SelectInput
                  label="Tipe"
                  placeholder="Pilih tipe mobil"
                  name="type"
                />
                <SelectInput
                  label="Kapasitas Mesin"
                  placeholder="Pilih Kapasitas Mesin mobil"
                  name="capacity"
                />
                <SelectInput
                  label="Jenis Transmisi"
                  placeholder="Pilih Jenis Transmisi mobil"
                  name="transmission"
                />
                <div className="col-span-2 w-full">
                  <TextInput
                    label="Jenis Keluhan"
                    placeholder="cth. Mesin mobil cepat panas"
                    name="complain"
                  />
                </div>
              </div>
            </section>

            <section className="px-5 py-5">
              <FormHeader title="Alamat Servis" />

              <div className="grid grid-cols-2 gap-8">
                <SelectInput
                  label="Provinsi"
                  placeholder="Pilih Provinsi"
                  name="province"
                />
                <SelectInput
                  label="Kota/Kabupaten"
                  placeholder="Pilih Kota/Kabupaten"
                  name="city"
                />
                <SelectInput
                  label="Kecamatan"
                  placeholder="Pilih Kecamatan"
                  name="region"
                />
                <SelectInput
                  label="Kode Pos"
                  placeholder="Pilih Kode Pos"
                  name="postal"
                />
                <div className="col-span-2 w-full">
                  <TextInput
                    textarea
                    label="Alamat"
                    placeholder="Masukkan alamat rumah anda"
                    name="address"
                  />
                </div>
              </div>
            </section>
            <section className="px-5 py-5">
              <Button size="full" variant="primary">
                Pesan
              </Button>
            </section>
          </forn>
        </div>
      </article>
    </section>
  );
};

export default Form;
