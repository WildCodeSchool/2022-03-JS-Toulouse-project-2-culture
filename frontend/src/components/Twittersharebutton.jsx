import React from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";

function Twittersharebutton({ recordid }) {
  // url ne peut fonctionner qu'avec un url valide donc un site déployé (localhost ne fonctionne pas)
  const url = `https://p2-2203-culture-frontend.bastienwcs.ovh/event/${recordid}`;
  return (
    <div>
      <TwitterShareButton url={url}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>
    </div>
  );
}

export default Twittersharebutton;
