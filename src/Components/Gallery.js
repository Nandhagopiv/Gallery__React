import cat1 from '../Assets/Images/cat.jpg'
import cat2 from '../Assets/Images/cat (1).jpg'
import cat3 from '../Assets/Images/cat (2).jpg'
import cat4 from '../Assets/Images/cat (3).jpg'
import cat5 from '../Assets/Images/cat (4).jpg'
import cat6 from '../Assets/Images/cat (5).jpg'
import cat7 from '../Assets/Images/cat (6).jpg'
import cat8 from '../Assets/Images/cat (7).jpg'
import cat9 from '../Assets/Images/cat (8).jpg'
import cat10 from '../Assets/Images/cat (9).jpg'
import cat11 from '../Assets/Images/cat (10).jpg'
import cat12 from '../Assets/Images/cat (11).jpg'
import cat13 from '../Assets/Images/cat (12).jpg'
import cat14 from '../Assets/Images/cat (13).jpg'
import Photo from './Photo'

let gallerydata = [
    {
        img: cat1,
        reaction: "Purrfect Surprise",
    },

    {
        img: cat2,
        reaction: "Feline Frenzy",
    },
    {
        img: cat3,
        reaction: "Whisker Wiggle",
    },
    {
        img: cat4,
        reaction: "Pawsitive Delight",
    },
    {
        img: cat5,
        reaction: "Meow Mix-up",
    },
    {
        img: cat6,
        reaction: "Curiosity Claws",
    },
    {
        img: cat7,
        reaction: "Tail Twitch Tango",
    },
    {
        img: cat8,
        reaction: "Kitty Kickback",
    },
    {
        img: cat9,
        reaction: "Fluffy Flurry",
    },
    {
        img: cat10,
        reaction: "Paw-some Reaction",
    },
    {
        img: cat11,
        reaction: "Whisker Whirlwind",
    },
    {
        img: cat12,
        reaction: "Catnip Commotion",
    },
    {
        img: cat13,
        reaction: "Cuddle Craze",
    },
    {
        img: cat14,
        reaction: "Claw-some Contemplation",
    }
]


function Gallery() {
    return (
        <main className='mainbox'>
            <div className='box'>
                {
                    gallerydata.map(function (data) {
                        return <Photo pic={data.img} rec={data.reaction}></Photo>
                    })
                }
            </div>
        </main>
    )
}

export default Gallery