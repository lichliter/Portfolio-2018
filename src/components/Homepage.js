import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const textColor = "rgb(62,64,66)";
const fontFamily = "roboto";
const backgroundColor = "white"

const AppWrapper = styled.div`
    background-color: ${backgroundColor};
    object-fit: cover;
    min-height: calc(100vh - 48px);
    max-width: 100vw;
`

const TextWrapper = styled(Grid)`
    padding: 32px;
`

const Hello = styled.h1`
    color: ${textColor};
    font-size: 48px;
    margin: 0px;
    font-family: ${fontFamily};
`

const BioParagraph = styled.p`
    color: ${textColor};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.825;
    font-family: ${fontFamily};
`

const ProfileImage = styled(Grid)`
    min-height: 400px;
    width: 100%;
    background-size: cover;
    background-position-y: center;
    background-position-x: center;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/brianlichliter-2018.appspot.com/o/Assets%2FNorthwesternHeadshots-113.jpg?alt=media&token=d56b6ace-45ff-4bdf-88cb-f8bfb1bc8c17);
    @media(max-width: 960px) {
        background-position-y: -205px;
    }
    @media(max-width: 480px) {
        background-position-y: top;
    }
`

class Homepage extends React.Component {
    render() {
        return (
            <AppWrapper>
                <Grid container spacing={0} alignItems="stretch" style={{minHeight: "calc(100vh - 48px)"}}>
                    <ProfileImage item sm={12} md={5}>
                    </ProfileImage>
                    <TextWrapper item sm={12} md={7}>
                        <Hello>
                            Hello.
                        </Hello>
                        <BioParagraph>
                            My name is Brian Lichliter and I am an experience designer currently working at <a rel="noopener noreferrer" target="_blank" style={{"textDecoration": "none", "color": "#f50057"}} href="http://www.drawn.com">Drawn</a>, a strategy and design firm. Previous intern at Visa and Motorola.
                        </BioParagraph>
                        <BioParagraph>
                            I have a passion for bringing user needs to the forefront of any and every endeavor. Having worked at various levels of abstraction in computing, technology, and design, I enjoy tackling problems both board and narrow in scope.
                        </BioParagraph>
                        <BioParagraph>
                            Currently spending my time learning tennis and continuously starting side projects with new web technologies.
                        </BioParagraph>          
                        <Link style={{"color": "white", "textDecoration": "unset"}} to="/projects">
                            <Button variant="contained" color="secondary" size="large" style={{marginRight: 16}}>
                                Projects
                            </Button>
                        </Link>
                        <Button rel="noopener noreferrer" href="https://www.dropbox.com/s/h0wr0nf6b2x0jcx/BrianLichliter_Resume.pdf?dl=0" target="_blank" variant="contained" color="primary" size="large">
                            Resume
                        </Button>
                    </TextWrapper>
                </Grid>            
            </AppWrapper>
        )
    }
}

export default Homepage