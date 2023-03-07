import { Link } from 'react-router-dom';
import sprite from '../../images/sprite.svg';

const BackLink = ({ to }) => {
  return (
    <Link to={to}>
      <svg>
        <use href={sprite + '#back'} />
      </svg>
      <p>Go back</p>
    </Link>
  );
};

export default BackLink;
