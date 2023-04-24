import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
    {/* Now */}
        <> <h2>Ready to Journey <img src="https://andromaverse.cloud/assets/images/alice.png" alt="alice" width={33} height={33} /> </h2></>
      <div className={styles.navBoxGrid}>

    {/* Mint */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          <h2 className={styles.selectBoxTitle}>Mint</h2>
          <img src="https://andromaverse.cloud/assets/images/mint.gif" alt="mint" width={88} height={88} />
          <p className={styles.selectBoxDescription}>


          </p>
        </div>
          {/* Staking */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >

          <h2 className={styles.selectBoxTitle}>Stake</h2>
          <img src="https://andromaverse.cloud/assets/images/stake.gif" alt="stake" width={88} height={88} />
          <p className={styles.selectBoxDescription}>
 
          </p>
        </div>
    {/* Delegate */}
       <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/delegate`)}
        >
         <h2 className={styles.selectBoxTitle}>Delegate</h2>
          <img src="https://andromaverse.cloud/assets/images/delegate.gif" alt="store" width={88} height={88} />

          <p className={styles.selectBoxDescription}>
 
          </p>
        </div>
    {/* Gameplay */}
    <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/gameplay`)}
        >
         <h2 className={styles.selectBoxTitle}>Gameplay</h2>
          <img src="https://andromaverse.cloud/assets/images/sc0.gif" alt="gameplay" width={88} height={88} />

          <p className={styles.selectBoxDescription}>
 
          </p>
        </div>

   {/* Soon */}
      </div>
        <> <h2><img src="https://andromaverse.cloud/assets/images/guard.png" alt="alice" width={33} height={33} />  Currently for viewing purposes only! Listings Disabled. <img src="https://andromaverse.cloud/assets/images/guard.png" alt="alice" width={33} height={33} /> </h2></>
      
      <div className={styles.navBoxGrid}>


  {/* Market */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`./marketplace`)}
        >
         <h2 className={styles.selectBoxTitle}>Marketplace</h2>
          <img src="https://andromaverse.cloud/assets/images/store.gif" alt="store" width={88} height={88} />

          <p className={styles.selectBoxDescription}>
          Beta view mode. Listings Disabled
          </p>
        </div>

   {/* Soon */}
   </div>
        <> <h2>Arriving Soon <img src="https://andromaverse.cloud/assets/images/ship.png" alt="ship" width={33} height={33} /> </h2></>
      
      <div className={styles.navBoxGrid}>

  {/* Merch */}
  <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/merch`)}
        >
         <h2 className={styles.selectBoxTitle}>Merch</h2>
          <img src="https://andromaverse.cloud/assets/images/merch.png" alt="merch" width={88} height={88} />

          <p className={styles.selectBoxDescription}>
 
          </p>
        </div>

   {/* Game */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/game`)}
        >
          <h2 className={styles.selectBoxTitle}>Game</h2>
          <img src="https://andromaverse.cloud/assets/images/game.gif" alt="game" width={88} height={88} />

          <p className={styles.selectBoxDescription}>
          </p>
        </div>

   {/* Docs */}
              <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/docs`)}
        >
         <h2 className={styles.selectBoxTitle}>Docs</h2>
          <img src="https://andromaverse.cloud/assets/images/docs.png" alt="docs" width={88} height={88} />

          <p className={styles.selectBoxDescription}>
 
          </p>
        </div>

  {/* Lore */}
              <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/lore`)}
        >
         <h2 className={styles.selectBoxTitle}>Lore</h2>
          <img src="https://andromaverse.cloud/assets/images/lore.png" alt="lore" width={88} height={88} />

          <p className={styles.selectBoxDescription}>
 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
