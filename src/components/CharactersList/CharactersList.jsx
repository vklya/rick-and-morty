import { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CharactersList = ({items, location}) => {
    const characters = items.map(({ id, image, name, species }) => {
        return (
          <Link key={id} to={`/character/${id}`} state={{ from: location }}>
            <li>
              <img loading="lazy" src={image} alt={name} />
              <h3>{name}</h3>
              <p>{species}</p>
            </li>
          </Link>
        );
    });

    return (
        <ul>
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