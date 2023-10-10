import styles from "./style.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { height } from "../anim";
import Body from "./body/Body";
import { useState } from "react";
import ImageComponent from "./image/ImageComponent";
import Footer from "./footer/Footer";

function Nav() {
  const links = [
    {
      title: "Home",
      href: "/",
      src: "home.jpg",
    },
    {
      title: "Shop",
      href: "/shop",
      src: "shop.jpeg",
    },
    {
      title: "About Us",
      href: "/about",
      src: "about_us.jpeg",
    },
    {
      title: "Lookbook",
      href: "/lookbook",
      src: "lookbook.jpg",
    },
    {
      title: "Contact",
      href: "/contact",
      src: "contact.jpeg",
    },
  ];

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <ImageComponent
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
}

export default Nav;
