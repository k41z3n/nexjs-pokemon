import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { Pokemon, PokemonsListResponse } from '../../interfaces';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { PokemonInfo } from '../../components/pokemon';
import { GetPokemonInfo } from '../../utils';

interface Props {
    pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
    return (
        <Layout title={pokemon.name}>
            <PokemonInfo pokemon={pokemon} />
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonsListResponse>(
        '/pokemon?limit=151'
    );

    const pokemons = data.results.map(({ name }) => {
        return name;
    });

    return {
        paths: pokemons.map((name) => ({
            params: { name },
        })),
        fallback: false, // 404
    };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string };



    return {
        props: {
            pokemon: await GetPokemonInfo(name),
        },
    };
};

export default PokemonByNamePage;
