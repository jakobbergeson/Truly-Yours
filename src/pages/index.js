/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout>
      <StaticImage
        src='../images/home-background.svg'
        alt="Anarchy Symbol"
        sx={{
          maxWidth: '500px',
        }}
      />
    </Layout>
  );
};

export default IndexPage;
