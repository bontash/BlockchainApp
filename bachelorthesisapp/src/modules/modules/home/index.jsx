import {MainSection} from "./components/MainSection";
import {Grid, ThemeProvider, Typography} from "@mui/material";
import {ParticlesBackground} from "../../core/ui/background/ParticlesBackground";
import {StyledDiv} from "../../core/ui/Div";
import HomeCard from "./modules/HomeCard";
import NavbarContainer from "../../core/ui/navbar/navbar/NavbarContainer";
import {theme} from "../../core/ui/theme/themeOptions";

const Home = () => {
    const flipCardFront = [{name: "SHA-256", description: "descriptionSha"}, {
        name: "RIPEMD-160",
        description: "descriptionRIPE"
    }, {name: "Keccak-256", description: "descriptionKeccak"}, {
        name: "Ethereum",
        description: "descriptionEth",
        logo: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Classic-Logo-PNG-Pic.png"
    }, {
        name: "Bitcoin",
        description: "descriptionBtc",
        logo: "https://png.monster/wp-content/uploads/2022/02/png.monster-623.png"
    }
    ]

    return <ThemeProvider theme={theme}>
    <NavbarContainer>
        <StyledDiv>
            <ParticlesBackground/>
            <MainSection>
                <Typography>This web-application aims to provide the user a deeper understanding of how cryptography
                and blockchain are related. Here, there are pages for each type of user: a more practical one, who wishes
                to see the practical aspects of the hashes, without being lost in details, or a more theoretical one,
                which wants a deeper understanding of the concepts, for a better use of the technology.
                </Typography>
                <Typography>
                From this page,
                you can navigate to a selection of pages where you can see the hash functions and the blockchain in action. On
                this page, brief descriptions of the hashes and the blockchain platforms are provided.
                </Typography>
                <Typography>
                Enjoy!
                </Typography>
            </MainSection>
            <Grid container justifyContent={"center"}>
            {
                flipCardFront.map((hash, idx) => {
                    return <HomeCard key={`home-card-${idx}`} hash={hash} />
                })
            }
            </Grid>

        </StyledDiv>
    </NavbarContainer>
    </ThemeProvider>

}

export default Home