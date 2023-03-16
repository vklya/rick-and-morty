import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getCharacters } from 'services/api';
import styled from 'styled-components';
import CharactersList from 'components/CharactersList';
import Filter from 'components/Filter';
import Error from 'components/Error';
import Loader from 'components/Loader';
import Hero from 'components/Hero';
import Container from 'components/Container';
import Login from 'components/Login';

const HiddenHeading = styled.h1`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`;

export default function Characters () {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const characterName = searchParams.get('name') ?? '';

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setLoading(true);
                const { results } = await getCharacters();
                function sortArray(a, b) {
                    return a.name.localeCompare(b.name);
                }
                const sortedResults = results.sort(sortArray);
                setItems(sortedResults);
            }
            catch (error) {
                setError(error.message);
                console.log(error);
            }
            finally {
                setLoading(false);
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
            <header><Login/></header>
            <main>
                <Container>
                    <HiddenHeading>Rick and Morty</HiddenHeading>
                    <Hero />
                    <Filter value={characterName} onChange={handleFilter} />
                    {error && <Error text={error} />}
                    {loading ? <Loader/> : <CharactersList items={visibleCharacters} location={location} />}
                </Container>
            </main>
        </>
    );
}