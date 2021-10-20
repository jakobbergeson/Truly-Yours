/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactModal from 'react-modal';
import Layout from '../components/layout';
import HeadTag from '../components/headTag';
import { artitsStyles } from '../utils';

ReactModal.setAppElement('#___gatsby');

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
            gatsbyImageData(width: 500)
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
            key={node.id}
            sx={artitsStyles.artistWrapper}
          >
            <HeadTag title={node.artistName} />
            <GatsbyImage image={bannerImage} />
            <Flex
              sx={artitsStyles.galImgBox}
            >
              {galleryImage1 && <button
                onClick={() => setModal1(true)}
                sx={artitsStyles.galImgBtn}
              >
                <GatsbyImage image={galleryImage1} />
              </button>}
              {galleryImage2 && <button
                onClick={() => setModal2(true)}
                sx={artitsStyles.galImgBtn}
              >
                <GatsbyImage image={galleryImage2} />
              </button>}
              {galleryImage3 && <button
                onClick={() => setModal3(true)}
                sx={artitsStyles.galImgBtn}
              >
                <GatsbyImage image={galleryImage3} />
              </button>}
            </Flex>
            <Link
              to={`/blog/${node.slug}`}
              sx={artitsStyles.blogBox}
            >
              <Flex
                sx={artitsStyles.postDate}
              >
                {node.publishedDate}
              </Flex>
              <h1>{node.blogPostTitle}</h1>
            </Link>
            <ReactModal
              closeTimeoutMS={300}
              isOpen={modal1}
              onRequestClose={() => setModal1(false)}
              shouldCloseOnOverlayClick={true}
              style={artitsStyles.modal}
            >
              <GatsbyImage image={galleryImage1} />
            </ReactModal>
            <ReactModal
              closeTimeoutMS={300}
              isOpen={modal2}
              onRequestClose={() => setModal2(false)}
              shouldCloseOnOverlayClick={true}
              style={artitsStyles.modal}
            >
              <GatsbyImage
                image={galleryImage2}
              />
            </ReactModal>
            <ReactModal
              closeTimeoutMS={300}
              isOpen={modal3}
              onRequestClose={() => setModal3(false)}
              shouldCloseOnOverlayClick={true}
              style={artitsStyles.modal}
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