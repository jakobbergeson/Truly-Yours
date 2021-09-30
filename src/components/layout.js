/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import React, { useState } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import FadeAnimation from "./fadeAnimation";
import { linkStyles } from "../utils";
import { buttonStyles } from "../utils";
import { flexStyles } from "../utils";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ children }) => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Navigation
                themeStyle={{ top: 0, right: 0 }}
                customStyle={linkStyles.navLink}
                to='/'
                direction="right"
                delay={.6}
            >
                SHOP
            </Navigation>
            <Navigation
                themeStyle={{ top: 0, left: 0 }}
                customStyle={linkStyles.navLink}
                to='/'
                direction="left"
                delay={.6}
            >
                MUSIC
            </Navigation>
            <Navigation
                themeStyle={{ bottom: 0, right: 0 }}
                customStyle={!open ? linkStyles.navLink : linkStyles.openFooter}
                to='/'
                direction="right"
                delay={.6}
            >
                VIDEOS
            </Navigation>
            <Navigation
                themeStyle={{ bottom: 0, left: 0 }}
                customStyle={!open ? linkStyles.navLink : linkStyles.openFooter}
                to='/'
                direction="left"
                delay={.6}
            >
                ARTISTS
            </Navigation>
            <Navigation
                themeStyle={{ top: 0, right: "50%", mt: -4, transform: "translateX(50%) translateY(0)", }}
                customStyle={linkStyles.navLink}
                to='/'
                direction="down"
                delay={.6}
            >
                <StaticImage
                    src='../images/Teddy-icon.png'
                    alt="Home Icon"
                    width="115px"
                />
            </Navigation>
            <button
                sx={{ bottom: 0, right: "50%", padding: "none", fontSize: 2 }}
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
                    style={!open ? flexStyles.main : flexStyles.openFooter}
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