import { Link } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import css from './back.module.scss';

const BackLink = ({ to }) => {
  return (
    <Link to={to} className={css.back}>
      <div className={css.back__content}>
        <svg className={css.back__icon}>
          <use href={sprite + '#back'} />
        </svg>
        <p className={css.back__text}>Go back</p>
      </div>
    </Link>
  );
};

export default BackLink;
