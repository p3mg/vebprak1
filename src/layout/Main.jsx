import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';
class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=3eac9364&s=matrix`)
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false}));
    }

    searchMovies = (str, type= "all") =>{
        fetch(`http://www.omdbapi.com/?apikey=3eac9364&s=${str}${
            type !== "all" ? `&type=${type}` : ""
        }`)
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false}));
    };

    render() {
        const {movies, loading} = this.state;

        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies}/>
                {loading ? <Preloader/> : <Movies movies={this.state.movies} />}
            </main>
        );
    }
}
// import { Search } from '../components/Search';
// import { Preloader } from '../components/Preloader';

// const API_KEY = process.env.REACT_APP_API_KEY;

// class Main extends React.Component {
//     state = {
//         movies: [],
//         loading: true,
//     };

//     componentDidMount() {
//         console.log(process.env);
//         // fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
//         fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3eac9364&s=matrix`)
//             .then((response) => response.json())
//             .then((data) =>
//                 this.setState({ movies: data.Search, loading: false })
//             )
//             .catch((err) => {
//                 console.error(err);
//                 this.setState({ loading: false });
//             });
//     }

//     searchMovies = (str, type = 'all') => {
//         this.setState({ loading: true });
//         fetch(
//             `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
//                 type !== 'all' ? `&type=${type}` : ''
//             }`
//         )
//             .then((response) => response.json())
//             .then((data) =>
//                 this.setState({ movies: data.Search, loading: false })
//             )
//             .catch((err) => {
//                 console.error(err);
//                 this.setState({ loading: false });
//             });
//     };

//     render() {
//         const { movies, loading } = this.state;

//         return (
//             <main className='container content'>
//                 <Search searchMovies={this.searchMovies} />
//                 {loading ? <Preloader /> : <Movies movies={movies} />}
//             </main>
//         );
//     }
// }

export { Main };