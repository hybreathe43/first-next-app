import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  console.log(process.env);
  return (
    <main className={styles.main}>
      <h1>Sahil</h1>
      <Link href="/login">Go TO Login </Link>
    </main>
  );
}
