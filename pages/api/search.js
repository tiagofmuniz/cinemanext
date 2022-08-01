import { apiBase, apiKey } from "../../lib/tmdb.js";

export default async (req, res) => {
   const result = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${req.query.q}`);
   const json = await result.json();
   console.log(json);

   res.status(200).json({
      list: json.results,
   });
};
