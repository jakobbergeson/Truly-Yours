/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { footerStyles } from "../utils";

library.add(fab);

const Footer = ({ open }) => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulFooter(sort: { fields: publishedDate, order: DESC }) {
			edges{
				node{
					url
                    icon
                    id
                }
            }
        }
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
                <ul
                    sx={footerStyles.socialList}
                >
                    {data.allContentfulFooter.edges.map(({ node }) => {


                        return (
                            <li
                                key={node.id}
                            >
                                <a
                                    href={node.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        m: 4
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={['fab', node.icon]}
                                        sx={footerStyles.socialIcons}
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>
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