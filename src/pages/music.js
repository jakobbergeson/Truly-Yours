/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import HeadTag from "../components/headTag";
import { listStyles } from "../utils/listStyles";

const Music = () => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulAlbum(sort: { fields: publishedDate, order: DESC }) {
			edges {
				node {
          id
          slug
					title
          albumArt {
						gatsbyImageData(height: 500)
        }
      }
    }
  }
}
  `);

  return (
    <Layout>
      <HeadTag title={'Music'} />
      <ol
        sx={listStyles.musicList}
      >
        {data.allContentfulAlbum.edges.map(({ node }) => {

          const image = getImage(node.albumArt);

          return (
            <li
              key={node.id}
              sx={listStyles.musicListLink}
            >
              <Link
                to={`/album/${node.slug}`}
              >
                <GatsbyImage
                  image={image}
                />
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout >
  );
};

export default Music;