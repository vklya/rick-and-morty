import css from './card.module.scss';
import PropTypes from 'prop-types';

export default function CharacterCard({ character }) {
  const { image, name, gender, status, species, origin, type } = character;
  return (
    <div className={css.card}>
      <img src={image} alt={name} className={css.card__image} />
      <h1 className={css.card__name}>{name}</h1>
      <h2 className={css.card__title}>Informations</h2>
      <ul className={css.info}>
        <li className={css.info__item}>
          <h3 className={css.info__title}>Gender</h3>
          <p className={css.info__descr}>{gender}</p>
        </li>
        <li className={css.info__item}>
          <h3 className={css.info__title}>Status</h3>
          <p className={css.info__descr}>{status}</p>
        </li>
        <li className={css.info__item}>
          <h3 className={css.info__title}>Specie</h3>
          <p className={css.info__descr}>{species}</p>
        </li>
        <li className={css.info__item}>
          <h3 className={css.info__title}>Origin</h3>
          <p className={css.info__descr}>{origin && origin.name}</p>
        </li>
        <li className={css.info__item}>
          <h3 className={css.info__title}>Type</h3>
          <p className={css.info__descr}>{type ? type : 'Unknown'}</p>
        </li>
      </ul>
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
  image: PropTypes.string,
  name: PropTypes.string,
  gender: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.arrayOf(PropTypes.object),
  type: PropTypes.string,
};
