/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import { listStyles } from "../utils/";

const Video = () => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulVideo(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          id
					url	
        }
      }
    }
  }
`);


  return (
    <Layout>



      <ol
        sx={listStyles.videoList}
      >

        {data.allContentfulVideo.edges.map(({ node }) => {

          return (
            <li
              key={node.id}
              sx={{
                mb: '15vh'
              }}
            >
              <iframe
                sx={{
                  width: '100%',
                  height: ['75vh', '80vh', null, '83vh', '70vh']
                }}
                src={node.url}
                title="YouTube video player"
                frameborder="0"
                allow="autoplay; encrypted-media;"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowfullscreen>
              </iframe>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default Video;