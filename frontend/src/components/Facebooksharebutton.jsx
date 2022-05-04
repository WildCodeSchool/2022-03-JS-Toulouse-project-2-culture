import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

function Facebooksharebutton() {
  const url =
    "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttp%253A%252F%252Flocalhost:3000/event/2c674bfab9f559b7972ac459a46e01288d8585ea&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=fr_FR";
  return (
    <div>
      <FacebookShareButton url={url} quote="">
        <FacebookIcon size={40} round />
      </FacebookShareButton>
    </div>
  );
}

export default Facebooksharebutton;
