import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Line Erica B.</title>
        <meta name="description" content="Personal space about Line Erica B." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.intro}>Hi there 👋, I'm</h2>
        <h1 className={styles.title}>Line Erica B.</h1>
        <p className={styles.description}>
          food, people, travel, interior, kids
        </p>
        <ul className={styles.social}>
          <li>
            <a href="https://www.instagram.com/lineerica/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lineerica/">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:line@erica-b.dk">Mail</a>
          </li>
        </ul>
      </main>
    </div>
  );
}
