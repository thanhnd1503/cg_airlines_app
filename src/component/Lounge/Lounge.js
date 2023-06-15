import React, {useEffect} from 'react'

// Imported Images =======>
import imageGrid from '../../asset/img/images-Grid2.png'
// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'
const Lounge = () => {  

  return (
    <div className='lounge container section'>
         <div className="sectionContainer grid">
           <div  className="imgDiv">
             <img src={imageGrid} alt="" />
           </div>
           <div className="textDiv">
            <h2 >Unaccompanied Minor Lounge</h2>

            <div className="grids grid">
                <div  className="singleGrid">
                    <span className="gridTitle">
                        Help through the airpot
                    </span>
                    <p>
                    You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                    </p>
                </div>

                <div  className="singleGrid">
                    <span className="gridTitle">
                        Priority Boarding
                    </span>
                    <p>
                    You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                    </p>
                </div>

                <div className="singleGrid">
                    <span className="gridTitle">
                        Care on the flight
                    </span>
                    <p>
                    You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                    </p>
                </div>

                <div  className="singleGrid">
                    <span className="gridTitle">
                        Chauffeur-drive service
                    </span>
                    <p>
                    You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                    </p>
                </div>
            </div>
           </div>
         </div>
    </div>
  )
}

export default Lounge