import {genresList, GenresList} from "../Constant/GenresList.jsx";
import {MovieList} from "./MovieList.jsx";

export const GenreMovieList = () => {
    return (
        <div>
            {
                genresList.map((item, index) => index <= 4 && (
                    <div className={'p-8 px-8 md:px-16'} key={item.id}>
                        <h2 className={'text-[20px] text-white font-bold'}>{item.name}</h2>
                        {/*<p>{item.description}</p>*/}
                        <MovieList genreId={item.id}/>
                    </div>
                ))
            }
        </div>
    )
}