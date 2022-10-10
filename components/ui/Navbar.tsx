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
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
                    alt="icon"
                    width={70}
                    height={70}
                />
            </Link>

            <Text color="white" h2 >
                <Link href="/" color="text">P</Link>
            </Text>
            <Text color="white" h3 >
                <Link href="/" color="text">
                    okemon
                </Link>
            </Text>
            <Spacer css={{ flex: "1" }} />
            <Text color="white" span >
                <Link href="/favorites" color="text">
                    Favoritos
                </Link>
            </Text>
        </div>
    )
}
