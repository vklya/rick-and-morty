import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getCharacters } from 'services/api';
import CharactersList from 'components/CharactersList';
import Filter from 'components/Filter';


export default function Characters () {
    const [items, setItems] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState('');

    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const characterName = searchParams.get('name') ?? '';

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                // setLoading(true);
                const { results } = await getCharacters();
                function sortArray(a, b) {
                    return a.name.localeCompare(b.name);
                }
                const sortedResults = results.sort(sortArray);
                setItems(sortedResults);
            }
            catch (error) {
                // setError(error.message);
                console.log(error);
            }
            finally {
                // setLoading(false);
            }
        }
        fetchCharacters();
    }, []);

    const handleFilter = ({ target }) => {
        const nextParams = target.value;
        setSearchParams({name: nextParams});
    }

    const visibleCharacters = items.filter(item =>
        item.name.toLowerCase().includes(characterName.toLowerCase())
    );

    return (
        <>
            <header>
                
            </header>
            <main>
                <Filter value={characterName} onChange={handleFilter} />
                <CharactersList items={visibleCharacters} location={location} />
            </main>
      </>
    );
}