/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout";
import HeadTag from "../components/headTag";

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulHome {
        edges {
          node {
            title
            homeImage {
              fluid {
                src
              }
            }
          }
        }
      }
    }
    `);

  const homePicture = getImage(data.allContentfulHome.edges[0].node.homeImage);
  const homePictureAlt = data.allContentfulHome.edges[0].node.title;

  return (
    <Layout>
      <HeadTag title={'Home'} />
      <Image
        src={data.allContentfulHome.edges[0].node.homeImage.fluid.src}
        alt={homePictureAlt}
        sx={{
          maxWidth: '500px',
          maxHeight: '500px',
          m: 'auto'
        }}
      />
    </Layout>
  );
};

export default IndexPage;
