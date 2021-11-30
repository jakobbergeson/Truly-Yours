/** @jsx jsx */
import { jsx, Flex, Grid } from "theme-ui";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import HeadTag from "../components/headTag";
import { albumStyles } from "../utils/albumStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSoundcloud,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


export const query = graphql`
query($slug: String!) {
  contentfulAlbum(slug: { eq: $slug }) {
    title
    tracklist
    soundcloudLink
    spotifyLink
    youtubeLink
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
          <Flex
            sx={albumStyles.iconBox}
          >
            <a
              href={data.contentfulAlbum.soundcloudLink}
              target="_blank"
              rel="noreferrer"
              sx={{
                m: 3
              }}
            >
              <FontAwesomeIcon
                icon={faSoundcloud}
                sx={albumStyles.streamIcon}
              />
            </a>
            <a
              href={data.contentfulAlbum.spotifyLink}
              target="_blank"
              rel="noreferrer"
              sx={{
                m: 3
              }}
            >
              <FontAwesomeIcon
                icon={faSpotify}
                sx={albumStyles.streamIcon}
              />
            </a>
            <a
              href={data.contentfulAlbum.youtubeLink}
              target="_blank"
              rel="noreferrer"
              sx={{
                m: 3
              }}
            >
              <FontAwesomeIcon
                icon={faYoutube}
                sx={albumStyles.streamIcon}
              />
            </a>
          </Flex>

        </Grid>
      </Flex>
    </Layout >
  );
};

export default Album;