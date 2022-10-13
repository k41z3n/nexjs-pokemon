import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export const GetPokemonInfo = async (nameOrId: string) => {


    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    const image = data.sprites.other?.dream_world.front_default || null;

    return {
        id: data.id,
        name: data.name,
        sprites: {
            front_default: data.sprites.front_default,
            back_default: data.sprites.back_default,
            front_shiny: data.sprites.front_shiny,
            back_shiny: data.sprites.back_shiny,
            other: {
                dream_world: {
                    front_default: image,
                },
            },
        },
    };
};
