import { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const useSlider = () => {
    const [moviesList, setMoviesList] = useState([]);
    const fetchTrendingMovies = async () => {
        try {
            const results = await GlobalApi.getTrendingMovies();
            setMoviesList(results);
        } catch (error) {
            console.error("Failed to fetch trending movies", error);
        }
    };


    useEffect(() => {
        fetchTrendingMovies();
    }, []);

    const sliderRef = useRef(null);
    const screenWidth = window.innerWidth;

    const smoothScroll = (amount) => {
        sliderRef.current.scroll({
            left: sliderRef.current.scrollLeft + amount,
            behavior: 'smooth'
        });
    }

    const leftScroll = () => smoothScroll(-screenWidth * 0.8);
    const rightScroll = () => smoothScroll(screenWidth * 0.8);

    return {
        moviesList,
        sliderRef,
        leftScroll,
        rightScroll
    }
}

export const Slider = () => {
    const { moviesList, sliderRef, leftScroll, rightScroll } = useSlider();

    return (
        <div className="flex items-center">
            <div className="hidden md:block absolute left-0 ml-4 mt-2 z-10 bg-black/50 rounded-full p-2 hover:bg-black/75 transition-all duration-300">
                <HiChevronLeft className={'text-white text-[30px] hover:cursor-pointer hover:scale-125'} onClick={leftScroll} />
            </div>
            <div className="hidden md:block absolute right-0 mr-4 mt-2 z-10 bg-black/50 rounded-full p-2 hover:bg-black/75 transition-all duration-300">
                <HiChevronRight className={'text-white text-[30px] hover:cursor-pointer hover:scale-125'} onClick={rightScroll} />
            </div>
            <div className="flex overflow-x-auto px-16 py-8 gap-4 scrollbar-hide scroll-smooth" ref={sliderRef}>
                {moviesList.map((movie, index) => (
                    <div key={movie.id || index} className="flex-shrink-0 group relative transition-all duration-300 hover:scale-105">
                        <img
                            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                            alt={movie.title}
                            className="w-48 md:h-[27rem] object-cover rounded-lg shadow-lg hover:shadow-xl hover:border-amber-100 md:w-[22rem] transition-all duration-300"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                            <h3 className="text-white text-sm font-medium truncate">{movie.title}</h3>
                            {movie.release_date && (
                                <p className="text-gray-300 text-xs">{new Date(movie.release_date).getFullYear()}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}