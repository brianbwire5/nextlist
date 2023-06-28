import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Ninja List | Not found</title>
      </Head>
      <div className="not-found">
        <h1>Ooops....😬</h1>
        <h2>The page cannot be found</h2>

        <p>
          Go back to{" "}
          <Link legacyBehavior href="/">
            <a>homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
