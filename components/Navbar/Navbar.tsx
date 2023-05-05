import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <img src="https://andromaverse.cloud/assets/images/isle.png" width={99} height={99} alt="Smoot"
            />
          </Link>

          <div className={styles.navMiddle}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link href="/mint" className={styles.link}>
              Mint
            </Link>
            <Link href="/stake" className={styles.link}>
              Stake
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <img src="https://andromaverse.cloud/assets/images/user-icon.png"
               className={styles.profileImage}
                
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
