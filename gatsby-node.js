require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const albumTemplate = path.resolve("./src/templates/album.js");

  return await graphql(`
    query {
      album: allContentfulAlbum {
          edges {
            node {
              slug
            }
          }
        }
  `).then(result => {

    result.data.album.edges.forEach(({ node }) => {
      createPage({
        path: `/album/${node.slug}`,
        component: albumTemplate,
        context: {
          slug: node.slug,
        },
      });
    });
  });
};