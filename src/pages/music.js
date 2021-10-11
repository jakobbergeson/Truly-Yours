/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
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
      <ol
        style={listStyles.musicList}
        sx={{
          gridTemplateColumns: [null, null, '1fr', '1fr 1fr']
        }}
      >
        {data.allContentfulAlbum.edges.map(({ node }) => {

          const image = getImage(node.albumArt);

          return (
            <li
              key={node.id}
              style={listStyles.musicListLink}
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