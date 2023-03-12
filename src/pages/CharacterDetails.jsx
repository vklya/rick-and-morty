import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getCharacterDetails } from 'services/api';
import CharacterCard from 'components/CharacterCard';
import BackLink from 'components/BackLink';
import Container from 'components/Container';
import Error from 'components/Error';
import Loader from 'components/Loader';

export default function CharacterDetails() {
    const [character, setCharacter] = useState([]);
    const [error, setError] = useState('');
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
                setError(error.message);
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
            <Container>
            <BackLink to={prevPage} />
            {loading && <Loader/>}
            {character && <CharacterCard character={character} />}
            {error && <Error text={error} />}
            </Container>
        </main>
    );
}