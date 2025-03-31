

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const MovieCard = ({movie}) => {
    return (
        <>
            <img src={IMAGE_BASE_URL+movie.poster_path} alt="" className={'w-[110px] h-[160px] md:w-[200px] md:h-[300px] ' +
                'object-cover rounded-lg hover:shadow-xl' +
                ' hover:border-[3px]  hover:border-amber-100 transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer'}/>
        </>
    )
}