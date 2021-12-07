/** @jsx jsx */
import { jsx, Flex, Grid } from "theme-ui";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import HeadTag from "../components/headTag";
import { albumStyles } from "../utils/albumStyles";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export const query = graphql`
query($slug: String!) {
  contentfulAlbum(slug: { eq: $slug }) {
    title
    tracklist
    url
    icon
    id
    albumArt {
      gatsbyImageData(height: 500)
    }
  }
}
`;
const Album = ({ data }) => {

  const image = getImage(data.contentfulAlbum.albumArt);

  return (
    <Layout>
      <HeadTag title={data.contentfulAlbum.title} />
      <Flex
        sx={albumStyles.wrapper}
      >
        <Flex
          sx={albumStyles.titleBox}
        >
          <h1
            sx={albumStyles.title}
          >
            {data.contentfulAlbum.title}
            <div
              sx={albumStyles.underline}
            />
          </h1>
        </Flex>
        <Grid
          sx={albumStyles.grid}
        >
          <GatsbyImage
            image={image}
            alt={data.contentfulAlbum.title}
          />
          <ol
            sx={albumStyles.tracklist}
          >
            {data.contentfulAlbum.tracklist.map((song, index) => {

              return (
                <li
                  key={index}
                >
                  <p
                    sx={albumStyles.trackListItem}
                  >
                    {song}
                  </p>
                </li>
              );
            })}

          </ol>
        </Grid>
        <Grid
          sx={albumStyles.linkBox}
        >
          <Flex
            sx={albumStyles.listenBox}
          >
            <h1
              sx={albumStyles.listenBoxChild}
            >
              LISTEN ON
            </h1>
          </Flex>
          <ul
            sx={albumStyles.iconBox}
          >
            {data.contentfulAlbum.url.map((link, index) => {
              return (
                <li
                  key={index}
                >
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      m: 3
                    }}
                  >
                    <FontAwesomeIcon
                      icon={['fab', data.contentfulAlbum.icon[index]]}
                      sx={albumStyles.streamIcon}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

        </Grid>
      </Flex>
    </Layout >
  );
};

export default Album;