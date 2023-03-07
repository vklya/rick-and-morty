import sprite from '../../images/sprite.svg';

const Filter = ({ value, onChange }) => (
    <div>
        <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Filter by name..."
        />
        <svg>
            <use href={sprite + '#search'} />
        </svg>
    </div>
);

export default Filter;
