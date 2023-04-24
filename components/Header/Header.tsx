import Link from "next/link";
import React from "react";
import styles from "./Home.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Link href="/" passHref legacyBehavior>
          <a>
            <img
              src={`https://andromaverse.cloud/assets/images/herowide.jpg`}
              alt="hero"
              className={styles.headerLogo}
              style={{ width: "100%" }}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

