/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import HeadTag from "../components/headTag";
import { listStyles } from "../utils/";
import { videsoStyles } from "../utils/";

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
      <HeadTag title={'Videos'} />
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
                sx={videsoStyles.youtubePlayer}
                src={
                  `https://www.youtube.com/embed/${node.url}?rel=0&modestbranding=1
                `}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay;"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen>
              </iframe>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default Video;