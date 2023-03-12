import PropTypes from 'prop-types';
import css from './error.module.scss';

const Error = text => <p className={css.error}>{text}</p>;

export default Error;

Error.propTypes = {
    text: PropTypes.string,
}
