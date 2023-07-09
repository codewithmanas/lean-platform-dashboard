import styles from "./Header.module.css";
import logo from "../assets/images/logo.png";
import downarrow from "../assets/images/down-arrow.svg";

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.header__container}>
            <img className={styles.page__logo} src={logo} alt="page logo" />
            <div className={styles.filters__text}>Filters</div>
            <img className={styles.down__arrow} src={downarrow} alt="down arrow" />
            <div className={styles.header__aboutus}>About Us</div>
            <div>Blog</div>
        </div>
    </header>
  )
}

export default Header