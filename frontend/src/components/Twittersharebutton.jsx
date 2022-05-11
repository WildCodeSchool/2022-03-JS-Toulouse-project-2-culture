import React from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";

function Twittersharebutton({ recordid, title, description }) {
  const url = `https://p2-2203-culture-frontend.bastienwcs.ovh/event/${recordid}`;
  return (
    <div>
      <TwitterShareButton url={url} title={title} description={description}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>
    </div>
  );
}

export default Twittersharebutton;
