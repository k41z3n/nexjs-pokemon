import { FC, useState } from "react"
import { Grid, Card, Button, Container, Text } from "@nextui-org/react"
import Image from 'next/image';
import { Pokemon } from "../../interfaces"
import { localStorageFavorites } from "../../utils"

import conffeti from 'canvas-confetti'


interface Props {
    pokemon: Pokemon
}


export const PokemonInfo: FC<Props> = ({ pokemon }) => {


    const [isInFavorites, setIsInFavorites] = useState(
        localStorageFavorites.existInFavorites(pokemon.id)
    );

    const onToggleFavorites = () => {
        localStorageFavorites.toggleFavorites(pokemon.id);
        setIsInFavorites(!isInFavorites)

        if (isInFavorites) return

        conffeti({
            zIndex: 999,
            particleCount: 100,
            spread: 100,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }

        })
    };

    return (
        <>
            {/* <pre>{JSON.stringify(pokemon, null, 4)}</pre> */}
            <Grid.Container gap={4}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable>
                        <Card.Body>
                            <Card.Image
                                src={
                                    pokemon.sprites.other?.dream_world.front_default ||
                                    '/no-image.png'
                                }
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header
                            css={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                            <Text h1 transform="capitalize">
                                {pokemon.name}
                            </Text>
                            <Button
                                color="gradient"
                                ghost={!isInFavorites}
                                onPress={onToggleFavorites}
                            >
                                {isInFavorites ? "En Favoritos" : "Guardar en favoritos"}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container direction="row" display="flex" gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </>
    )
}
