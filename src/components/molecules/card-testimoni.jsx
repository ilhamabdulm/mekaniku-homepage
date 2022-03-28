import LeftIcon from 'assets/icons/arrow-left-icon.svg';
import RightIcon from 'assets/icons/arrow-right-icon.svg';

const CardTestimoni = (props) => {
  const { testi } = props;

  return (
    <div className="testimoni-card" data-current={`${testi?.current}`}>
      {testi?.current && (
        <div className="arrow left">
          <img src={LeftIcon} alt="left" />
        </div>
      )}
      <div className="flex flex-col items-center gap-2 mb-4">
        <img alt="ppimage" src={testi.picture} width={74} height={74} />
        <p className="font-semibold text-lg">{testi.name}</p>
      </div>
      <p className="text-neutral-500 text-center">{testi?.text}</p>

      {testi?.current && (
        <div className="arrow right">
          <img src={RightIcon} alt="right" />
        </div>
      )}
    </div>
  );
};

export default CardTestimoni;
