import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";


const Lore : NextPage = () => {
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
             <h1 className={styles.h1}>Bored?</h1>
          <img src="https://andromaverse.cloud/assets/images/lad.gif" alt="home" width={88} height={88} />
          <p className={styles.selectBoxDescription}>
          </p>Back Home
          <p className={styles.explain}>
      </p>
        </div>
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/`)}
        >
             <h1 className={styles.h1}>Rhea</h1>
          <img src="https://andromaverse.cloud/assets/images/RheaIsland.png" alt="RheaIsland" width={88} height={88} />
          <p className={styles.selectBoxDescription}>
          </p>Meet Rhea
          <p className={styles.explain}>
      </p>
        </div>
    </div>
    </div>
      );
    };

export default Lore;   