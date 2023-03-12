import { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import css from './list.module.scss';

const CharactersList = ({items, location}) => {
    const characters = items.map(({ id, image, name, species }) => {
        return (
          <Link
            key={id}
            to={`/character/${id}`}
            state={{ from: location }}
            className={css.characters__link}
          >
            <li className={css.characters__item}>
              <img
                loading="lazy"
                src={image}
                alt={name}
                className={css.characters__image}
              />
              <div className={css.characters__info}>
                <h2 className={css.characters__name}>{name}</h2>
                <p className={css.characters__descr}>{species}</p>
              </div>
            </li>
          </Link>
        );
    });

    return (
        <ul className={css.characters}>
            {characters}
        </ul>
    );
};

export default memo(CharactersList);

CharactersList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
};