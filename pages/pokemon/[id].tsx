import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { PokemonInfo } from '../../components/pokemon/';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    return (
        <Layout title={pokemon.name}>
            <PokemonInfo pokemon={pokemon} />
        </Layout>
    );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routesimport { GetStaticPaths } from 'next'

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    // const { data } = await  // your fetch function here

    const pokemons151 = [...Array(151)].map((val, index) => `${index + 1}`);
    return {
        // paths: [
        //     {
        //         params: { id: '1' }
        //     }
        // ],
        paths: pokemons151.map((id) => ({
            params: { id },
        })),
        fallback: false, // 404
    };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // const { data } = await  // your fetch function here
    const { id } = params as { id: string };

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data,
        },
    };
};

export default PokemonPage;
