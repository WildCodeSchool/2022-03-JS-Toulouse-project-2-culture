import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

function Facebooksharebutton({ recordid, title, description }) {
  const url = `https://p2-2203-culture-frontend.bastienwcs.ovh/event/${recordid}`;
  return (
    <div>
      <FacebookShareButton
        url={url}
        title={`${title}`}
        description={`${description}`}
      >
        <FacebookIcon size={40} round />
      </FacebookShareButton>
    </div>
  );
}

export default Facebooksharebutton;
