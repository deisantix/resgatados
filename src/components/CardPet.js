import PataOutlineEscura from '../assets/images/pata_outline_escura.svg';

function CardPet(props) {
  const pet = props.pet;

  return (
    <div className="cardpet">
      <div className="foto-conteiner">
        <img src={pet.img} alt="" />
      </div>

      <div className="info-conteiner">
        <span>{pet.nome}, {pet.idade}</span>
        <span>{pet.divulgante}</span>
      </div>

      <img src={PataOutlineEscura} className="pata-deco-bg" />
    </div>
  );
}

export default CardPet;
