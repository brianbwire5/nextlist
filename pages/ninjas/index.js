import Head from "next/head";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();
  console.log("Ninjas", data);
  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | List</title>
      </Head>

      <h1> All Ninjas</h1>

      {ninjas.map((ninja) => (
        <Link legacyBehavior href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
          {/*} <span 
            //   style={{
            //     display: "flex",
            //     justifyContent: "space-between",
            //     alignItems: "center",
            //   }}
            // >
            //   {"😃"}
            // </span>*/}
        </Link>
      ))}
    </>
  );
};

export default Ninjas;
