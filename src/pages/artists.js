/** @jsx jsx */
import { jsx, Flex, Image } from 'theme-ui';
import { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
            fluid {
              src
            }
          }
          galleryPictures {
            title
            fluid {
            src
            }
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

        const bannerImage = node.bannerPicture.fluid.src;
        const galleryImage1 = node.galleryPictures[0].fluid.src;
        const galleryImage2 = node.galleryPictures[1].fluid.src;
        const galleryImage3 = node.galleryPictures[2].fluid.src;

        return (
          <Flex
            key={node.id}
            sx={artistsStyles.artistWrapper}
          >
            <HeadTag title={node.artistName} />
            <Flex
              sx={artistsStyles.banImgBox}
            >
              <Image
                src={bannerImage}
                alt={node.artistName}
              />
            </Flex>
            <Flex

              sx={artistsStyles.galImgBox}
            >
              {galleryImage1 && <button
                onClick={() => setModal1(true)}
                sx={artistsStyles.galImgBtn}
              >
                <Image
                  src={galleryImage1}
                  alt={node.galleryPictures[0].title}
                />
              </button>}
              {galleryImage2 && <button
                onClick={() => setModal2(true)}
                sx={artistsStyles.galImgBtn}
              >
                <Image
                  src={galleryImage2}
                  alt={node.galleryPictures[1].title}
                />
              </button>}
              {galleryImage3 && <button
                onClick={() => setModal3(true)}
                sx={artistsStyles.galImgBtn}
              >
                <Image
                  src={galleryImage3}
                  alt={node.galleryPictures[2].title}
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
              <Image
                src={galleryImage1}
                alt={node.galleryPictures[0].title}
              />
            </ReactModal>
            <ReactModal
              closeTimeoutMS={300}
              isOpen={modal2}
              onRequestClose={() => setModal2(false)}
              shouldCloseOnOverlayClick={true}
              style={artistsStyles.modal}
            >
              <Image
                src={galleryImage2}
                alt={node.galleryPictures[1].title}
              />
            </ReactModal>
            <ReactModal
              closeTimeoutMS={300}
              isOpen={modal3}
              onRequestClose={() => setModal3(false)}
              shouldCloseOnOverlayClick={true}
              style={artistsStyles.modal}
            >
              <Image
                src={galleryImage3}
                alt={node.galleryPictures[2].title}
              />
            </ReactModal>
          </Flex>
        );
      })}
    </Layout>
  );
};

export default Artists;