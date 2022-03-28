import { ReactComponent as FuelIcon } from 'assets/icons/fuel-icon.svg';
import { ReactComponent as TransmissionIcon } from 'assets/icons/transmission-icon.svg';
import { ReactComponent as CapacityIcon } from 'assets/icons/capacity-icon.svg';

const CardBursa = (props) => {
  const { image, price = 0, name, specification } = props;

  return (
    <div className="bursa-card">
      <img src={image} alt="car" width={223} height={128} />
      <div className="mt-3">
        <h3 className="text-lg font-semibold">
          Rp{price.toLocaleString('id')}
        </h3>
        <p className="text-xs font-semibold">{name}</p>
      </div>

      <div className="border-y border-neutral-300 mt-3 p-1 flex items-center justify-between">
        <p className="text-xs text-neutral-500 flex items-center gap-2">
          <FuelIcon />
          {specification?.fuel}
        </p>
        <p className="text-xs text-neutral-500 flex items-center gap-2">
          <TransmissionIcon />
          {specification?.transmission}
        </p>
        <p className="text-xs text-neutral-500 flex items-center gap-2">
          <CapacityIcon />
          {specification?.capacity}
        </p>
      </div>
    </div>
  );
};

export default CardBursa;
