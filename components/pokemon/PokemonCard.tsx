import { SmallPokemon } from "../../interfaces"
import { FC } from 'react';
import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {

    const router = useRouter()

    const navigateToPoke = () => {
        router.push(`/pokemon/${id}`)
    }


    return (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
            <Card
                isPressable
                isHoverable
                onPress={navigateToPoke}
            >
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={img} width="100%" height={140} />
                </Card.Body>
                <Card.Footer>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text transform='capitalize'>{name}</Text>
                        <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
