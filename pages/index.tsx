import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
    {/* Now */}
        <> <h2>Villagers</h2></>
      <div className={styles.navBoxGrid}>

    {/* Mint */}
        <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          <h1 className={styles.selectBoxTitle}>Mint</h1>
          <img src="https://andromaverse.cloud/assets/images/mint.gif" alt="mint" width={111} height={111} />
          <p className={styles.selectBoxDescription}>
          </p>
        </div>

           {/* Mint Probabilities */}
           <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/stats`)}
        >
         <h2 className={styles.selectBoxTitle}>Info</h2>
          <img src="https://andromaverse.cloud/assets/images/lore.png" alt="stats" width={111} height={111} />

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
          <img src="https://andromaverse.cloud/assets/images/Mnemosyne.png" alt="stake" width={111} height={111} />
          <p className={styles.selectBoxDescription}>
 
          </p>
        </div>

          {/* Auctions */}
          <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`./marketplace/auction`)}
        >
         <h2 className={styles.selectBoxTitle}>Auctions</h2>
          <img src="https://andromaverse.cloud/assets/images/store.gif" alt="store" width={111} height={111} />

          <p className={styles.selectBoxDescription}>
          </p>
        </div>

    {/* Now */}
    </div>
    <> <h2>Now</h2></>
      <div className={styles.navBoxGrid}>
    {/* Delegate */}
       <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`/delegate`)}
        >
         <h2 className={styles.selectBoxTitle}>Delegate</h2>
          <img src="https://andromaverse.cloud/assets/images/stars.png" alt="store" width={88} height={88} />

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



  {/* Game */}
           <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`https://game.andromaverse.io`)}
        >
          <h2 className={styles.selectBoxTitle}>Playtest</h2>
          <img src="https://andromaverse.cloud/assets/images/game.gif" alt="game" width={88} height={88} />

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
          <img src="https://andromaverse.cloud/assets/images/Mne.png" alt="lore" width={88} height={88} />

          <p className={styles.selectBoxDescription}>
 
          </p>
        </div>

   {/* Soon */}
   </div>
        <> <h2> Wen? <img src="https://andromaverse.cloud/assets/images/Clock.png" alt="ship" width={33} height={33} /> </h2></>
      
      <div className={styles.navBoxGrid}>
  {/* SGP */}
  <div
          className={styles.navBox}
          role="button"
          onClick={() => router.push(`https://www.stargaze.zone/marketplace/stars17s7emulfygjuk0xn906athk5e5efsdtumsat5n2nad7mtrg4xres3ysf3p`)}
        >
         <h2 className={styles.selectBoxTitle}>Ship</h2>
          <img src="https://andromaverse.cloud/assets/images/FederationShip.png" alt="Ship" width={88} height={88} />

          <p className={styles.selectBoxDescription}>
 
          </p>
        </div>


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


      </div>
    </div>
  );
};

export default Home;
