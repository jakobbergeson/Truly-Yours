const React = require("react");

exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setBodyAttributes,
  setPostBodyComponents
}) => {
  setHeadComponents([
    <link as="script" rel="preload" href="/scripts/preloader.js" />,
    <noscript>
      <link rel="stylesheet" href="/styles/noscript.css" />
    </noscript>
  ]);
  setPreBodyComponents([
    <div id="preloader">
    </div>
  ]);
  setBodyAttributes({
    className: "preloader_active"
  });
  setPostBodyComponents([
    <script src="/scripts/preloader.js" />
  ]);
};
