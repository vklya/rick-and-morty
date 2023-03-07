import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getCharacterDetails } from 'services/api';
import CharacterCard from 'components/CharacterCard';
import BackLink from 'components/BackLink';

export default function CharacterDetails() {
    const [character, setCharacter] = useState([]);
    // const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const location = useLocation();
    const prevPage = location.state?.from ?? '/';
    
    useEffect(() => {
        const fetchCharacter = async () => {
            if (!id) return;
            try {
                setLoading(true);
                const data = await getCharacterDetails(id);
                setCharacter(data);
            }
            catch (error) {
                // setError(error.message);
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchCharacter();
    }, [id, setCharacter]);

    return (
        <main>
            <BackLink to={prevPage} />
            {loading && <p>loading...</p>}
            {character && <CharacterCard character={character}/>}
        </main>
    )
}