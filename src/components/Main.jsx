
import styles from "./Main.module.css"
import MainSection from "./MainSection"
import Sidebar from "./Sidebar"

function Main() {
  return (
    <main className={styles.main}>
        <div className={styles.main__container}>
            <Sidebar />
            <MainSection />
        </div>
    </main>
  )
}

export default Main