import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";


const Stats : NextPage = () => {
    const router = useRouter();

return (
    <div className={styles.navContainer}>

   {/* Info */}
   <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Beta View. Pardon our progress.
                </span>
                <br />
              </h1>
              <p className={styles.heroSubtitle}>
              </p>
   <div className={styles.heroAssetFrame}>
            <img src="https://andromaverse.cloud/assets/images/Mint53.jpg" width={860} height={540}/>
          </div>
        </div>
   
    </div>
    </div>
      );
    };

export default Stats;   