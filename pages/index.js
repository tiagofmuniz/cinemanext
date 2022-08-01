import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ list }) {
   return (
      <div className={styles.container}>
         <Head>
            <title>Site TMDB</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={styles.main}>
            <h1 className={styles.title}>Film es em destaque </h1>
            <Link href="/busca">Ir para a Busca</Link>

            <ul>
               {list.map(item => (
                  <li>
                     <a href={`/movie/${item.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" width="150" />
                        <br />
                        {item.title}
                     </a>
                  </li>
               ))}
            </ul>

            <Link href="/sobre">Sobre</Link>
         </main>
      </div>
   );
}
export async function getServerSideProps() {
   const res = await fetch("http://localhost:3000/api/trending");
   const json = await res.json();

   return {
      props: {
         list: json.list,
      },
   };
}
