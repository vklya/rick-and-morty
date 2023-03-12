import heroDesk from '../../images/heroDesk.jpg';
import heroMob from '../../images/heroMob.jpg';
import heroDesk2x from '../../images/heroDesk2x.jpg';
import heroMob2x from '../../images/heroMob2x.jpg';
import css from './hero.module.scss';

const Hero = () => {
    return (
        <picture>
            <source
            srcSet={`${heroDesk} 1x, ${heroDesk2x} 2x`}
            media="(min-width: 768px)"
            />
            <source
            srcSet={`${heroMob} 1x, ${heroMob2x} 2x`}
            media="(max-width: 767px)"
            />
            <img src={heroMob} alt="Rick and Morty" className={css.hero} />
        </picture>
    );
};

export default Hero;
