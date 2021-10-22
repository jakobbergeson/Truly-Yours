/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";
import Layout from "../components/layout";
import HeadTag from "../components/headTag";
import { blogStyles } from "../utils";
import { albumStyles } from "../utils/albumStyles";

export const query = graphql`
query($slug: String!) {
  contentfulArtist(slug: { eq: $slug }) {
    artistName
    publishedDate(formatString: "MMM D")
    blogPostTitle
    blogPostBody{
      raw
    }
  }
}
`;

const body = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
  }
};

const Blog = ({ data }) => {

  return (
    <Layout>
      <HeadTag title={data.contentfulArtist.artistName} />
      <Flex
        sx={blogStyles.body}
      >
        <Flex
          sx={blogStyles.header}
        >
          <h2
            sx={blogStyles.title}
          >
            {data.contentfulArtist.blogPostTitle}
            <div
              sx={albumStyles.underline}
            />
          </h2>

          {data.contentfulArtist.publishedDate}

        </Flex>
        {renderRichText(data.contentfulArtist.blogPostBody, body)}
      </Flex>
    </Layout>
  );
};

export default Blog;