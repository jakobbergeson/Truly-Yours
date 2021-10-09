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
            style={!open ? footerStyles.footerWrapper : footerStyles.openFooter}
            sx={{
                flexDirection: 'column',
            }}
        >
            <Flex
                sx={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
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
                        sx={{
                            color: 'white',
                            fontSize: 6,
                            '&:hover': {
                                transition: 'opacity 250ms ease-in-out',
                                opacity: .75
                            }
                        }}

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
                        sx={{
                            color: 'white',
                            fontSize: 6,
                            '&:hover': {
                                transition: 'opacity 250ms ease-in-out',
                                opacity: .75
                            }
                        }}
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
                        sx={{
                            color: 'white',
                            fontSize: 6,
                            '&:hover': {
                                transition: 'opacity 250ms ease-in-out',
                                opacity: .70
                            }
                        }}
                    />
                </a>
            </Flex>
            <Flex
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'end',
                    mt: 'auto',
                    ml: 4,
                    mr: 4,
                    mb: 3,
                    fontFamily: 'body',
                    fontSize: [3, null, 'inherit', null, null, null],
                    flexDirection: ['column', 'row'],

                }}>
                <h3
                    sx={{
                        fontWeight: 400,
                        m: '0px',
                        fontSize: [2, 3]

                    }}
                >
                    ©
                    <span sx={{ color: 'red', }}> {data.site.siteMetadata.title}</span>.
                    All rights reserved.
                </h3>
                <Flex
                    sx={{
                        color: 'red',
                        fontSize: [1],
                    }}
                >
                    <Link
                        sx={{
                            fontWeight: 400,
                            mt: [3, null],
                            mr: 2,
                            ml: 2,
                            cursor: 'pointer',
                            '&:hover': {
                                transition: 'opacity 250ms ease-in-out',
                                opacity: .70
                            }
                        }}
                    >
                        MUSIC
                    </Link>
                    <Link
                        sx={{
                            fontWeight: 400,
                            mt: [3, null],
                            mr: 2,
                            ml: 2,
                            cursor: 'pointer',
                            '&:hover': {
                                transition: 'opacity 250ms ease-in-out',
                                opacity: .70
                            }
                        }}
                    >
                        SHOP
                    </Link>
                    <Link
                        sx={{
                            fontWeight: 400,
                            mt: [3, null],
                            mr: 2,
                            ml: 2,
                            cursor: 'pointer',
                            '&:hover': {
                                transition: 'opacity 250ms ease-in-out',
                                opacity: .70
                            }
                        }}
                    >
                        ARTISTS
                    </Link>
                    <Link
                        sx={{
                            fontWeight: 400,
                            mt: [3, null],
                            mr: 2,
                            ml: 2,
                            cursor: 'pointer',
                            '&:hover': {
                                transition: 'opacity 250ms ease-in-out',
                                opacity: .70
                            }
                        }}
                    >
                        VIDEOS
                    </Link>
                </Flex>
            </Flex>

        </Flex >
    );
};

export default Footer;