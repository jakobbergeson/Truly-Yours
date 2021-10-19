/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactModal from 'react-modal';
import Layout from '../components/layout';
import HeadTag from '../components/headTag';
import { artitsStyles } from '../utils';

const Artists = () => {

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const data = useStaticQuery(graphql`
  query {
    allContentfulArtist(limit:1 sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          id
          artistName
          publishedDate(formatString: "MMM D")
          bannerPicture {
            gatsbyImageData(width: 400)
          }
          galleryPictures{
            gatsbyImageData
          }
          blogPostTitle
          blogPostBody{
            raw
          }
        }
      }
    }
  }
  `);

  return (
    <Layout>
      {data.allContentfulArtist.edges.map(({ node }) => {

        const bannerImage = getImage(node.bannerPicture);
        const galleryImage1 = getImage(node.galleryPictures[0]);
        const galleryImage2 = getImage(node.galleryPictures[1]);
        const galleryImage3 = getImage(node.galleryPictures[2]);

        return (
          <Flex
            sx={artitsStyles.artistWrapper}
          >
            <HeadTag title={node.artistName} />
            <GatsbyImage image={bannerImage} />
            <Flex>
              <button
                onClick={() => setModal1(true)}
              >
                <GatsbyImage image={galleryImage1} />
              </button>
              <button
                onClick={() => setModal2(true)}
              >
                <GatsbyImage image={galleryImage2} />
              </button>
              <button
                onClick={() => setModal3(true)}
              >
                <GatsbyImage image={galleryImage3} />
              </button>
            </Flex>
            <ReactModal
              isOpen={modal1}
              onRequestClose={() => setModal1(false)}
              shouldCloseOnOverlayClick={true}
            >
              <GatsbyImage image={galleryImage1} />
            </ReactModal>
            <ReactModal
              isOpen={modal2}
              onRequestClose={() => setModal2(false)}
              shouldCloseOnOverlayClick={true}
            >
              <GatsbyImage image={galleryImage2} />
            </ReactModal>
            <ReactModal
              isOpen={modal3}
              onRequestClose={() => setModal3(false)}
              shouldCloseOnOverlayClick={true}
            >
              <GatsbyImage image={galleryImage3} />
            </ReactModal>
          </Flex>
        );
      })
      }
    </Layout>
  );
};

export default Artists;