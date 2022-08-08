import {MainSection} from "./components/MainSection";
import {Grid, ThemeProvider, Typography} from "@mui/material";
import {ParticlesBackground} from "../../core/ui/background/ParticlesBackground";
import {StyledDiv} from "../../core/ui/Div";
import HomeCard from "./modules/HomeCard";
import NavbarContainer from "../../core/ui/navbar/navbar/NavbarContainer";
import {theme} from "../../core/ui/theme/themeOptions";

const Home = () => {
    const flipCardFront = [
        {
            name: "SHA-256",
            description: "  Part of the Secure Hash Algorithm-2(SHA-2) family of functions, it outputs a 256-bit digest." +
                "So far, there was not a successful attack on it. It was standardized in 2015 by the NIST." +
                "It is constructed on the Merkle-Damgård model, which is a model for collision-resistant cryptographic hash functions." +
                "It is used in Bitcoin."
        },
        {
            name: "RIPEMD-160",
            description: "  Used also in Bitcoin, RIPEMD-160 is a also based on the Merkle-Damgård construction. The algorithm is based on" +
                " 2 parallel versions of the algorithm MD4, with some modifications. It outputs a 160-bit hash." +
                " Even if it has the same construction as SHA-256, it can be used for different reasons, due to the splitting of branches."
        },
        {
            name: "Keccak-256",
            description: "    It is part of the newest family of cryptographic hash functions, SHA-3; this family uses a sponge construction, " +
                "which is comprised of 2 phases: absorbing and squeezing. In the first stage, the message is processed and in the second it is 'squeezed'" +
                " in the desired format. The standardized algorithm is SHA-3, but Keccak is used in Ethereum."
        },
        {
            name: "Bitcoin",
            description: "  The first and most popular widely-used blockchain. Its concept was designed by Satoshi Nakamoto; Nakamoto thought it as a " +
                "way of eliminating the need for a third-party in a currency exchange. It is the most expensive cryptocurrency for now. One of the motives for the high price" +
                " of Bitcoin is its limit: only 21 million bitcoins can be mined.",
            logo: "https://png.monster/wp-content/uploads/2022/02/png.monster-623.png"
        },
        {
            name: "Ethereum",
            description: "  The second most popular blockchain, designed by Vitalik Buterin. Different from Bitcoin, it was " +
                "created as both a cryptocurrency and a development environment. Besides transactions, users can write code on the chain, called smart contracts. Each deployment " +
                "on the blockchain has a price, called gas.",
            logo: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Classic-Logo-PNG-Pic.png"
        }
    ]

    return <ThemeProvider theme={theme}>
        <NavbarContainer>
            <StyledDiv>
                <ParticlesBackground/>
                <MainSection>
                    <Typography>This web-application aims to provide the user a deeper understanding of how cryptography
                        and blockchain are related. Here, there are pages for each type of user: a more practical one,
                        who wishes
                        to see the practical aspects of the hashes, without being lost in details, or a more theoretical
                        one,
                        which wants a deeper understanding of the concepts, for a better use of the technology.
                    </Typography>
                    <Typography>
                        From this page,
                        you can navigate to a selection of pages where you can see the hash functions and the blockchain
                        in action. On
                        this page, brief descriptions of the hashes and the blockchain platforms are provided.
                    </Typography>
                    <Typography>
                        Enjoy!
                    </Typography>
                </MainSection>
                <Grid container justifyContent={"center"}>
                    {
                        flipCardFront.map((hash, idx) => {
                            return <HomeCard key={`home-card-${idx}`} hash={hash}/>
                        })
                    }
                </Grid>

            </StyledDiv>
        </NavbarContainer>
    </ThemeProvider>

}

export default Home