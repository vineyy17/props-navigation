import styles from './style.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { height } from '../anim';

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
        <p>Nav</p>
        <p>Nav</p>
        <p>Nav</p>
        <p>Nav</p>
      </div>
    </motion.div>
  );
}

export default Nav;
