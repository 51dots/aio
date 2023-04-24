import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";


const Delegate : NextPage = () => {
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
             <h1 className={styles.h1}>Home</h1>
          <img src="https://andromaverse.cloud/assets/images/lad.gif" alt="home" width={88} height={88} />
          <p className={styles.selectBoxDescription}>
          </p>
          <p className={styles.explain}>
            Back Home
      </p>
        </div>
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`https://wallet.keplr.app/chains/stargaze?modal=validator&chain=stargaze-1&validator_address=starsvaloper1jtjld0gnn4np74m6c6qn8xcazzvc2j9mnp0wxg&referral=true`)}
        >
             <h1 className={styles.h1}>Osmo</h1>
          <img src="https://andromaverse.cloud/assets/images/osmo.png" alt="osmo" width={88} height={88} />
          <p className={styles.selectBoxDescription}>
          </p>
          <p className={styles.explain}>
      Delegate
      </p>
        </div> <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`https://wallet.keplr.app/chains/stargaze?modal=validator&chain=stargaze-1&validator_address=starsvaloper1jtjld0gnn4np74m6c6qn8xcazzvc2j9mnp0wxg&referral=true`)}
        >
             <h1 className={styles.h1}>Stars</h1>
          <img src="https://andromaverse.cloud/assets/images/stars.png" alt="stars" width={88} height={88} />
          <p className={styles.selectBoxDescription}>
          </p>
          <p className={styles.explain}>
      Delegate
      </p>
        </div>
    </div>
    </div>
      );
    };

export default Delegate;   