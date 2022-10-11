import { Container, Text, Image } from "@nextui-org/react"
import { Layout } from "../../components/layouts"


const FavoritesPage = () => {
    return (
        <Layout title="Favorites">
            <Container css={{
                display: "flex",
                flexDirection: "column",
                height: "calc(100vh - 100px)",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center"
            }}>
                <Text h1 > NO hay favoritos</Text>
                <Image
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                    alt="icon"
                    width={300}
                    height={300}
                />

            </Container>
        </Layout>
    )
}

export default FavoritesPage