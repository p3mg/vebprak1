import { Movie } from './Movie';

// function Movies(props){
//     const { movies } = props;

//     return (
//         <div className='movies'>
//             {movies.map((movie) => (
//                 <Movie key={movie.imdbID} {...movie} />
//             ))}
//         </div>
//     );
    
// }
// function Movies() {
//     return <div className="movies"></div>;
// }
// function Movies(props) {
//     const { movies = [] } = props; // Если movies не передан, используем пустой массив

//     return (
//         <div className='movies'>
//             {movies.length ? (
//                 movies.map((movie) => (
//                     <Movie key={movie.imdbID} {...movie} />
//                 ))
//             ) : (
//                 <p>No movies found</p>
//             )}
//         </div>
//     );
// }

function Movies( props ) {
    const {movies = [] } = props;
    return (
        <div className='movies'>
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <p>No movies found</p>
            )}
        </div>
    );
}


export { Movies };