import linkedinImg from "../assets/images/linkedin.svg";
import instagramImg from "../assets/images/instagram.svg";
import twitterImg from "../assets/images/twitter.svg";
import facebookImg from "../assets/images/facebook.svg";
import copyrightImg from "../assets/images/copyright.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
    <div className={styles.footer__container}>
      <div className={styles.footer__left}>
      <div className={styles.socials}>
        <img src={linkedinImg} alt="linkedinImg" />
        <img src={instagramImg} alt="instagramImg" />
        <img src={twitterImg} alt="twitterImg" />
        <img src={facebookImg} alt="facebookImg" />
      </div>

        <p className={styles.copyright}><img src={copyrightImg} alt="copyright" /> 2023 M<span>entorbridge. </span>All Rights Reserved.</p>
      </div>
      

      <div className={styles.footer__right}>
      <div className={`${styles.footer__text__section} ${styles.footer__text__first}`}>
        <p>Contact us</p>
        <p>Privacy policy</p>
        <p>Terms of use</p>
      </div>
      <div className={`${styles.footer__text__section} ${styles.footer__text__second}`}>
        <p>Help center</p>
        <p>About us</p>
        <p>FAQs</p>
      </div>
      </div>
      
    </div>
  </footer>
  )
}

export default Footer