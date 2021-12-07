const React = require("react");

exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setBodyAttributes,
  setPostBodyComponents
}) => {
  setHeadComponents([
    <link as="script" key="pre-head" rel="modulepreload" href="/scripts/preloader.js" />
  ]);
  setPreBodyComponents([
    <div
      key="pre-body"
      id="preloader"
    >
    </div>
  ]);
  setBodyAttributes({
    className: "preloader_active"
  });
  setPostBodyComponents([
    <script key="post-body" src="/scripts/preloader.js" />
  ]);
};
