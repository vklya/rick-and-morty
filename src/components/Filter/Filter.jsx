import sprite from '../../images/sprite.svg';
import css from './filter.module.scss';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div className={css.filter}>
    <input
      className={css.filter__input}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Filter by name..."
    />
    <svg className={css.filter__icon}>
      <use href={sprite + '#search'} />
    </svg>
  </div>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
