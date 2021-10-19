/** @jsx jsx */
import { jsx } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import HeadTag from "../components/headTag";

const IndexPage = () => {
  return (
    <Layout>
      <HeadTag title={'Home'} />
      <StaticImage
        src='../images/home-background.svg'
        alt="Anarchy Symbol"
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
