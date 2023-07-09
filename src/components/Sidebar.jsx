import styles from "./Main.module.css"
import profileImg from "../assets/images/profile.png"
import homeImg from "../assets/images/home.svg"
import phoneImg from "../assets/images/phone.svg"
import queriesImg from "../assets/images/queries.svg"
import schedulesImg from "../assets/images/schedules.svg"
import serviceImg from "../assets/images/service.svg"
import profileIcon from "../assets/images/profile-icon.svg"
import inviteImg from "../assets/images/invite.svg"
import rewardsImg from "../assets/images/rewards.svg"
import logoutImg from "../assets/images/logout.svg"





function Sidebar() {
  return (
    <section className={styles.sidebar}>
        <div className={styles.sidebar__container}>
            <div className={styles.profile}>
                <img src={profileImg} alt="profile pic" className={styles.profile__pic} />
                <p className={styles.profile__name}>Neha Bhat</p>
            </div>
            <div className={`${styles.side__nav} ${styles.sidenav__active}`}>
                <img className={styles.sidenav__img} src={homeImg} alt="side nav image" />
                <p>Home</p>
            </div>
            <div className={styles.side__nav}>
                <img className={styles.sidenav__img} src={phoneImg} alt="side nav image" />
                <p>Bookings</p>
            </div>
            <div className={styles.side__nav}>
                <img className={styles.sidenav__img} src={queriesImg} alt="side nav image" />
                <p>Queries</p>
            </div>
            <hr />
            <div className={styles.side__nav}>
                <img className={styles.sidenav__img} src={schedulesImg} alt="side nav image" />
                <p>Schedules</p>
            </div>
            <div className={styles.side__nav}>
                <img className={styles.sidenav__img} src={serviceImg} alt="side nav image" />
                <p>Services</p>
            </div>
            <hr />
            <div className={styles.side__nav}>
                <img className={styles.sidenav__img} src={profileIcon} alt="side nav image" />
                <p>Profile</p>
            </div>
            
            <div className={styles.side__nav}>
                <img className={styles.sidenav__img} src={inviteImg} alt="side nav image" />
                <p>Invites and Earn</p>
            </div>
            <div className={styles.side__nav}>
                <img className={styles.sidenav__img} src={rewardsImg} alt="side nav image" />
                <p>Rewards</p>
            </div>
            <div className={styles.side__nav}>
                <img className={styles.sidenav__img} src={logoutImg} alt="side nav image" />
                <p>Logout</p>
            </div>
        </div>
    </section>
  )
}

export default Sidebar