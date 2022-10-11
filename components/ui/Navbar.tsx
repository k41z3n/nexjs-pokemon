import Image from 'next/image';
import NextLink from "next/link"
import { Link, Spacer, Text, useTheme } from "@nextui-org/react"



export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            padding: "0 20px",
            backgroundColor: theme?.colors.gray100.value
        }}>

            <Link href="/">
                <Image
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
                    alt="icon"
                    width={70}
                    height={70}
                />
            </Link>

            <NextLink href="/" >
                <Link>
                    <Text color="white" h2 >P</Text>
                    <Text color="white" h3 >okemon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: "1" }} />
            <Link href="/favorites" color="text">
                <Text color="white" span >
                    Favoritos
                </Text>
            </Link>
        </div>
    )
}
