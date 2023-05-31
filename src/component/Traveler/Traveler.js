import React , {useEffect} from 'react'

//Imported Destination Images ====>
import paris from '../../asset/img/paris-92aa52aa.jpg'
import NewYork from '../../asset/img/NewYork-731d3046.jpg'
import london from '../../asset/img/london-bb4ed57c.jpg'
import dubai from '../../asset/img/dubai-02be5bbc.jpg'

//Imported Travelers Images ====>
import traveler1 from '../../asset/img/user (1)-85a5ea1d.png'
import traveler2 from '../../asset/img/user (2)-228d0dc1.png'
import traveler3 from '../../asset/img/user (3)-a76f669e.png'
import traveler4 from '../../asset/img/user (4)-c2e0b240.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [
    {
        id: 1,
        destinationImage: NewYork,
        travelerImage: traveler2,
        travelerName: 'IsraTech',
        socialLink: '@isratech8'
    },
    {
        id: 2,
        destinationImage: paris,
        travelerImage: traveler1,
        travelerName: 'Wilson Lindsey',
        socialLink: '@wilsonlindsey'
    },
    {
        id: 3,
        destinationImage: london,
        travelerImage: traveler3,
        travelerName: 'Nicole Web',
        socialLink: '@nicoleweb'
    },
    {
        id: 4,
        destinationImage: dubai,
        travelerImage: traveler4,
        travelerName: 'Naresh Lamer',
        socialLink: '@nareshlamer'
    }
]

const Travelers = () => {


    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className='travelers container section'>
            <div className="sectionContainer">
                <h2 data-aos="fade-down" data-aos-duration="2500">Top travelers of this month!</h2>

                <div className="travelersContainer grid">
                    {
                        travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) =>{
                            return(
                                <div data-aos="fade-up" data-aos-duration="2500" key={id} className="singleTraveler">
                                    <img src={destinationImage} className='destinationImage'/>
                                    <div className="travelerDetails">
                                        <div className="travelerPicture">
                                            <img src={travelerImage} className='travelerImage'/>
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Travelers