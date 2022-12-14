import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home({ list }) {
   const [searchText, setSearchText] = useState("");
   const [movieList, setMovieList] = useState([]);

   const handleSearch = async () => {
      if (searchText !== "") {
         const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`);
         const json = await result.json();
         setMovieList(json.list);

         console.log(json);
      }
   };

   return (
      <div className={styles.container}>
         <Head>
            <title>Site legal</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={styles.main}>
            <h1 className={styles.title}>Busca</h1>
            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            Termo de busca: {searchText}
            <button onClick={handleSearch}>Buscar</button>
            <hr />
            <ul>
               {movieList.map((item) => (
                  <li>
                     <a href={`/movie/${item.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" width="150" />
                        <br />
                        {item.title}
                     </a>
                  </li>
               ))}
            </ul>
         </main>
      </div>
   );
}
