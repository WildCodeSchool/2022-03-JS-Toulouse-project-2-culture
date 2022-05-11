import React from "react";
import { LinkedinShareButton, LinkedinIcon } from "react-share";

function Linkedinsharebutton({ recordid, title, description }) {
  const url = `https://p2-2203-culture-frontend.bastienwcs.ovh/event/${recordid}`;
  return (
    <div>
      <LinkedinShareButton
        url={url}
        title={`${title}`}
        description={`${description}`}
      >
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>
    </div>
  );
}

export default Linkedinsharebutton;
