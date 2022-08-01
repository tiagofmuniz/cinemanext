import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function MovieItem(info) {
   console.log(info);

   return (
      <div className={styles.container}>
         <Head>
            <title>Site legal</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={styles.main}>
            <h1 className={styles.title}>{info.info.title}</h1>
            <p>Nota: {info.info.vote_average}</p>
            <p>{info.info.overview}</p>
            <img src={`https://image.tmdb.org/t/p/original${info.info.backdrop_path}`} width="400" />
         </main>
      </div>
   );
}
export async function getServerSideProps(context) {
   const res = await fetch(`http:localhost:3000/api/movie/${context.params.id}`);
   const json = await res.json();
   return {
      props: {
         info: json.info,
      },
   };
}
