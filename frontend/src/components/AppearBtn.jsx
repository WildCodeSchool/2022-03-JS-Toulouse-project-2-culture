import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AppearBtn() {
  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  return (
    <motion.div
      className="actions"
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldShowActions ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <div>
        <Link to="/">
          <button type="button" id="backhome">
            Retour à l&apos;accueil
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default AppearBtn;
