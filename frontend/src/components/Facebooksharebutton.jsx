import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

function Facebooksharebutton({ recordid }) {
  // url ne peut fonctionner qu'avec un url valide donc un site déployé (localhost ne fonctionne pas)
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
