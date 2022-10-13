import { Grid, Card } from "@nextui-org/react"
import { useRouter } from "next/router"

import { FC } from "react"

interface Props {
    pokemonId: number
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {

    const router = useRouter()

    const onPokemonClick = () => {
        router.push(`pokemon/${pokemonId}`)
    }


    return (
        <Grid xs={5} sm={3} md={2} xl={1} key={pokemonId}>
            <Card isHoverable isPressable css={{ padding: 10 }} onPress={onPokemonClick}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    )
}
