/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import React, { useState } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import FadeAnimation from "./fadeAnimation";
import { layoutStyles } from "../utils";
import { buttonStyles } from "../utils";
import { flexStyles } from "../utils";
import { StaticImage } from "gatsby-plugin-image";
import '../styles/layout.css';

const Layout = ({ children }) => {

    const [open, setOpen] = useState(false);

    const delay = .7;


    return (
        <>
            <Navigation
                themeStyle={{
                    top: 0,
                    right: 0,
                    padding: ['18px', '25px'],
                }}
                customStyle={layoutStyles.navLink}
                to='/'
                direction="right"
                delay={delay}
                fadeInOut={true}
                floatInOut={true}
                angleInitial={"+"}
                customDelay={delay + .8}
            >
                SHOP
            </Navigation>
            <Navigation
                themeStyle={{
                    top: 0,
                    left: 0,
                    padding: ['18px', '25px'],
                }}
                customStyle={layoutStyles.navLink}
                to='/music'
                direction="left"
                delay={delay}
                fadeInOut={true}
                floatInOut={true}
                angleInitial={"-"}
                customDelay={delay + .9}
            >
                MUSIC
            </Navigation>
            <Navigation
                themeStyle={{
                    bottom: !open ? 0 : 250,
                    right: 0,
                    padding: ['18px', '25px']
                }}
                customStyle={layoutStyles.navLink}
                to='/video'
                direction="right"
                delay={delay}
                fadeInOut={true}
                floatInOut={true}
                angleInitial={"-"}
                customDelay={delay + .7}
                open={open}
            >
                VIDEOS
            </Navigation>
            <Navigation
                themeStyle={{
                    bottom: !open ? 0 : 250,
                    left: 0,
                    padding: ['18px', '25px']

                }}
                customStyle={layoutStyles.navLink}
                to='/artists'
                direction="left"
                delay={delay}
                fadeInOut={true}
                floatInOut={true}
                angleInitial={"+"}
                customDelay={delay + .75}
                open={open}
            >
                ARTISTS
            </Navigation>
            <Navigation
                themeStyle={{
                    top: 0,
                    right: "50%",
                    mt: -4,
                    transform: "translateX(50%) translateY(0)",
                    padding: 25
                }}
                customStyle={layoutStyles.navLink}
                to='/'
                direction="down"
                delay={delay}
            >
                <StaticImage
                    src='../images/Teddy-icon (2).svg'
                    alt="Home Icon"
                />
            </Navigation>
            <button
                sx={{ bottom: 0, right: "50%", fontSize: 3 }}
                style={!open ? buttonStyles.bottomButton : buttonStyles.openFooter}
                onClick={() => { setOpen(!open); }}
            >
                +
            </button>
            <FadeAnimation
                wrapperElement="div"
                direction="null"
                delay={.5}
            >
                <Flex
                    sx={!open ? flexStyles.main : flexStyles.openFooter}
                >
                    {children}
                </Flex>
            </FadeAnimation>
            <Footer
                open={open}
            />
        </>
    );
};

export default Layout;