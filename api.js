const tmdbKey = import.meta.env.VITE_TMDB_URL;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: tmdbKey
    },
  };

 export default async function fetchMovie(API) {
    try{
      console.log("calling api")
        const res = await fetch(API, options,)
        const data = await res.json()

        return data.results
    }catch(err){
        console.log(err)
    }
}

// export async function searchMovie(name, page) {
//     try{
//         const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=${page}`, options)
//         const data = await res.json()
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }