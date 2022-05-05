import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

function Facebooksharebutton({ recordid }) {
  const url = `http://localhost:3000/event/${recordid}`;
  return (
    <div>
      <FacebookShareButton url={url} quote="">
        <FacebookIcon size={40} round />
      </FacebookShareButton>
    </div>
  );
}

export default Facebooksharebutton;
