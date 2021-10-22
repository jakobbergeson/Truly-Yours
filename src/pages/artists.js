/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactModal from 'react-modal';
import Layout from '../components/layout';
import HeadTag from '../components/headTag';
import { artistsStyles } from '../utils';

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
            gatsbyImageData
          }
          galleryPictures{
            gatsbyImageData(width: 600)
          }
          blogPostTitle
          slug
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
            sx={artistsStyles.artistWrapper}
          >
            <HeadTag title={node.artistName} />
            <Flex
              sx={artistsStyles.banImgBox}
            >
              <GatsbyImage
                image={bannerImage}
              />
            </Flex>
            <Flex

              sx={artistsStyles.galImgBox}
            >
              {galleryImage1 && <button
                onClick={() => setModal1(true)}
                sx={artistsStyles.galImgBtn}
              >
                <GatsbyImage
                  image={galleryImage1}
                />
              </button>}
              {galleryImage2 && <button
                onClick={() => setModal2(true)}
                sx={artistsStyles.galImgBtn}
              >
                <GatsbyImage
                  image={galleryImage2}
                />
              </button>}
              {galleryImage3 && <button
                onClick={() => setModal3(true)}
                sx={artistsStyles.galImgBtn}
              >
                <GatsbyImage
                  image={galleryImage3}
                />
              </button>}
            </Flex>
            <Link
              to={`/blog/${node.slug}`}
              sx={artistsStyles.blogBox}
            >
              <div
                sx={artistsStyles.postDate}
              >
                <p
                  sx={artistsStyles.postDateChild}
                >
                  {node.publishedDate}

                </p>
              </div>
              <div
                sx={artistsStyles.blogDivider}
              />
              <p
                sx={artistsStyles.blogTitle}
              >{node.blogPostTitle}
              </p>
            </Link>
            <ReactModal
              closeTimeoutMS={300}
              isOpen={modal1}
              onRequestClose={() => setModal1(false)}
              shouldCloseOnOverlayClick={true}
              style={artistsStyles.modal}
            >
              <GatsbyImage image={galleryImage1} />
            </ReactModal>
            <ReactModal
              closeTimeoutMS={300}
              isOpen={modal2}
              onRequestClose={() => setModal2(false)}
              shouldCloseOnOverlayClick={true}
              style={artistsStyles.modal}
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
              style={artistsStyles.modal}
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