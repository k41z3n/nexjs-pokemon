import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { useEffect, useState } from 'react';
import { localStorageFavorites } from '../../utils';
import { FavoritesPokemons } from '../../components/pokemon';

const FavoritesPage = () => {
    const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritesPokemons(localStorageFavorites.pokemons);
    }, []);

    return (
        <Layout title="Favorites">
            {favoritesPokemons.length === 0 ? (
                <NoFavorites />
            ) : (
                <FavoritesPokemons pokemons={favoritesPokemons} />
            )}
        </Layout>
    );
};

export default FavoritesPage;
