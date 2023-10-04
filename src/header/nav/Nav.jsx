import styles from './style.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { height } from '../anim';
import Body from './body/Body';

function Nav() {
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
          <Body />
          {/* <Footer /> */}
        </div>
        {/* <Image /> */}
      </div>
    </motion.div>
  );
}

export default Nav;
