import icon from '../../images/icon.png';
import css from './loader.module.scss';

const Loader = () => <img src={icon} alt='loading...' className={css.loader} />;

export default Loader;