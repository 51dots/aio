import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Marketplace.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Marketplace: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
          </div>
          <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Buy Secondary Market(view)
                </Link>
                <Link
                  className={styles.heroCta}
                  href="/sell">
                   Sell Secondary Market(view)
                </Link>
              </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-asset.png"
              width={860}
              height={540}
              alt="Hero asset"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Beta Viewing mode only.
                </span>
                <br />
                Soon anon.
              </h1>
              <p className={styles.heroSubtitle}>
              </p>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
