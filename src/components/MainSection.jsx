import styles from "./Main.module.css"
import downarrowFeaturesImg from "../assets/images/down-arrow-features.svg";
import mentor1 from "../assets/images/mentor1.png";
import mentor2 from "../assets/images/mentor2.png";
import mentor3 from "../assets/images/mentor3.png";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";

function MainSection() {
  return (
    <section className={styles.main__section}>
        <div className={styles.mainsection__container}>
            <h2 className={styles.mainsection__tilte}>Hi Neha!</h2>
            <div>
              <div className={styles.mainsection__features}>
                  <div className={styles.features__header}>
                    <h3 className={styles.features__heading}>Welcome to Mentor Bridge</h3>
                    <p className={styles.features__subtitle}>Your Journey as a mentor begins here</p>
                  </div>
                  <div className={styles.features__options}>
                    <p>Add availability</p>
                    <img src={downarrowFeaturesImg} alt="down arrow" />
                  </div>
                  <div className={styles.features__options}>
                    <p>Complete your profile</p>
                    <img src={downarrowFeaturesImg} alt="down arrow" />
                  </div>
                  <div className={styles.features__options}>
                    <p>Share a post</p>
                    <img src={downarrowFeaturesImg} alt="down arrow" />
                  </div>
                  <div className={styles.features__options}>
                    <p>Connect payout</p>
                    <img src={downarrowFeaturesImg} alt="down arrow" />
                  </div>
              </div>
              <div className={styles.similar__mentors}>
                <div>
                    <img className={styles.left__arrow} src={leftArrow} alt="left arrow" />
                    <img className={styles.mentor__one} src={mentor1} alt="mentor1" />
                    <img className={styles.mentor__two} src={mentor2} alt="mentor2" />
                    <img className={styles.mentor__three} src={mentor3} alt="mentor3" />
                    <img className={styles.right__arrow} src={rightArrow} alt="right arrow" />
                  </div>
                <p>Meet similar mentors</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default MainSection