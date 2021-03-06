import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Hook Form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://react-hook-form.com">React Hook Form</a>
        </h1>

        <div className={styles.grid}>
          <a href="/use-form" className={styles.card}>
            <h2>useForm &rarr;</h2>
          </a>
          <a href="/use-field-array" className={styles.card}>
            <h2>useFieldArray &rarr;</h2>
          </a>
          <a href="/use-form-context" className={styles.card}>
            <h2>useFormContext &rarr;</h2>
          </a>
          <a href="/controller" className={styles.card}>
            <h2>Controller &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
