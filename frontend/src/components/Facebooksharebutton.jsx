import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

function Facebooksharebutton({ recordid }) {
  // url ne peut fonctionner qu'avec un url valide donc un site déployé (localhost ne fonctionne pas)
  const url = `https://p2-2203-culture-frontend.bastienwcs.ovh/event/${recordid}`;
  return (
    <div>
      <FacebookShareButton url={url} quote="">
        <FacebookIcon size={40} round />
      </FacebookShareButton>
    </div>
  );
}

export default Facebooksharebutton;
