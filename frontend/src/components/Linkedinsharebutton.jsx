import React from "react";
import { LinkedinShareButton, TwitterIcon } from "react-share";

function Linkedinsharebutton({ recordid }) {
  // url ne peut fonctionner qu'avec un url valide donc un site déployé (localhost ne fonctionne pas)
  const url = `http://localhost:3000/event/${recordid}`;
  return (
    <div>
      <LinkedinShareButton url={url}>
        <TwitterIcon size={40} round />
      </LinkedinShareButton>
    </div>
  );
}

export default Linkedinsharebutton;
