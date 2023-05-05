import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";


const Closed : NextPage = () => {
    const router = useRouter();

return (

  <div className={styles.navContainer}>

<img src="https://andromaverse.cloud/assets/images/andr.png" alt="andr" width={512} height={512} />
        <h1 className="text-5xl tracking-tight max-w-3xl font-semibold mb-4 mt-10">
          We&apos;ll be back.
        </h1>
        <p className="ml-4 text-gray-500 text-xl">
          We&apos;re busy updating for you and will be back soon.
        </p>
      </div>
    )
  }

  export default Closed;   