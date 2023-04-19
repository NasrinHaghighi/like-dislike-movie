import React from 'react'


import MovieList from '../components/MovieList/MovieList';



function Home() {





  return (
    <>
   <MovieList />

    </>
  )
}

export default Home



// const [data, setdata] =useState([])
// const list=useFetch(('https://api.themoviedb.org/3/discover/movie?api_key=8454841ff275e66490314f04e5aaf36f'))

//  useEffect(() => {
//   const fetchMovies = async () => {
//     try {
//       const fetchedMovies = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=8454841ff275e66490314f04e5aaf36f')
//      console.log(fetchedMovies.data)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchMovies();
// }, []);