/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faYoutube,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { footerStyles } from "../utils";

const Footer = ({ open }) => {

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);


    return (
        <Flex
            sx={!open ? footerStyles.footerWrapper : footerStyles.openFooter}
        >
            <Flex
                sx={footerStyles.socialBox}
            >
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                        m: 4
                    }}
                >
                    <FontAwesomeIcon
                        icon={faInstagram}
                        sx={footerStyles.socialIcons}
                    />
                </a>
                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                        m: 4
                    }}
                >
                    <FontAwesomeIcon
                        icon={faYoutube}
                        sx={footerStyles.socialIcons}
                    />
                </a>
                <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                        m: 4
                    }}
                >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        sx={footerStyles.socialIcons}
                    />
                </a>
            </Flex>
            <Flex
                sx={footerStyles.bottomBox}>
                <h3
                    sx={footerStyles.copyright}
                >
                    ©
                    <span sx={{ color: 'red', }}> {data.site.siteMetadata.title}</span>
                </h3>
                <Flex
                    sx={footerStyles.navigationBox}
                >
                    <Link
                        to='/music'
                        sx={footerStyles.navLink}
                    >
                        MUSIC
                    </Link>
                    <Link
                        to='/products/'
                        sx={footerStyles.navLink}
                    >
                        SHOP
                    </Link>
                    <Link
                        to='/artists'
                        sx={footerStyles.navLink}
                    >
                        ARTISTS
                    </Link>
                    <Link
                        to='/video'
                        sx={footerStyles.navLink}
                    >
                        VIDEOS
                    </Link>
                </Flex>
            </Flex>

        </Flex >
    );
};

export default Footer;