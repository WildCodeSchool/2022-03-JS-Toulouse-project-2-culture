import whiteHeart from "../assets/logo/heart-white.png";
import redHeart from "../assets/logo/heart-red.png";
import "./CardTheme.css";

function CardThemeHeart({ isFavorite, handlefavorite }) {
  return (
    <div>
      <button
        className="heartBtn"
        type="button"
        onClick={handlefavorite}
        onKeyDown={handlefavorite}
      >
        <img
          className="heartLogo"
          src={isFavorite ? redHeart : whiteHeart}
          alt="logo coeur"
        />
      </button>
    </div>
  );
}

export default CardThemeHeart;
