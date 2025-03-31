import disney from './../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'
import pixar from '../assets/images/pixar.png'
import starwars from '../assets/images/starwar.png'
import nationalgeographic from '../assets/images/nationalG.png'
import disneyV from '../assets/Videos/disney.mp4'
import marvelV from '../assets/Videos/marvel.mp4'
import pixarV from '../assets/Videos/pixar.mp4'
import starwarsV from './../assets/Videos/star-wars.mp4'
import nationalgeographicV from '../assets/Videos/national-geographic.mp4'

export const ProductionHouses = () => {
    const productionHouseList = [
        {
            id: 1,
            name: 'Disney',
            img: disney,
            video: disneyV
        },
        {
            id: 2,
            name: 'Marvel',
            img: marvel,
            video: marvelV
        },
        {
            id: 3,
            name: 'Pixar',
            img: pixar,
            video: pixarV
        },
        {
            id: 4,
            name: 'Star Wars',
            img: starwars,
            video: starwarsV
        },
        {
            id: 5,
            name: 'National Geographic',
            img: nationalgeographic,
            video: nationalgeographicV
        }
    ]
    return (
        <div className={'flex gap-2 md:gap-5 p-2 md:px-16 px-5'}>
            {
                productionHouseList.map((item) => (
                    <div key={item.id} className={'border-[2px] z-[1] shadow-xl shadow-black border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 easy-in-out cursor-pointer '}>
                        <img src={item.img} alt={item.name} className={'w-full '} />
                        {/*<h2>{item.name}</h2>*/}
                        <video src={item.video} autoPlay loop muted className={'absolute top-0 rounded-lg opacity-0 hover:opacity-50 z-0'} />
                    </div>
                ))
            }
        </div>
    )
}