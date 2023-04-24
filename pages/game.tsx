import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";


const Game : NextPage = () => {
    const router = useRouter();

return (
    <div className={styles.navContainer}>

   {/* Go Home */}
      <div className={styles.navBoxGrid}>
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/`)}
        >
             <h1 className={styles.h1}>Soon</h1>
          <img src="https://andromaverse.cloud/assets/images/home.gif" alt="home" width={64} height={64} />
          <p className={styles.selectBoxDescription}>
          </p>
          <p className={styles.explain}>
      It's not your wave yet anon
      </p>
        </div>
    </div>
    </div>
      );
    };

export default Game;       