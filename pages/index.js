import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Homepage</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          laborum, nemo quisquam ratione laboriosam aspernatur asperiores hic
          dolorem, enim, sapiente eos error repellat. Voluptate, sint? Ducimus
          sunt voluptas fuga veritatis?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          laborum, nemo quisquam ratione laboriosam aspernatur asperiores hic
          dolorem, enim, sapiente eos error repellat. Voluptate, sint? Ducimus
          sunt voluptas fuga veritatis?
        </p>

        <Link href="/ninjas" legacyBehavior>
          <a className={styles.btn}> See ninja listing</a>
        </Link>
      </div>
    </>
  );
}
