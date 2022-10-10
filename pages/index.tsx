import type { NextPage, GetStaticProps } from 'next'

import { Grid } from '@nextui-org/react';

import { Layout } from '../components/layouts'

import { pokeApi } from '../api';

import { PokemonsListResponse, SmallPokemon } from '../interfaces';

import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title={"150 pokemons"}>
      <Grid.Container gap={2} justify="flex-start">
        {
          pokemons.map((poke) => {
            return (
              <PokemonCard pokemon={poke} key={poke.id} />
            )
          }
          )}
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonsListResponse>("/pokemon?limit=151")


  const pokemons: SmallPokemon[] = data.results.map((poke, index) => {
    const id: number = index + 1
    return {
      ...poke,
      id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    }
  });

  return {
    props: {
      pokemons: pokemons
    }
  }
}



export default HomePage
