import React from 'react'

//Imported Images ===>
import video from '../../asset/img/video.mp4'
import aeroplane from '../../asset/img/planeTakeOff.png'

const Home = () => {
    return (
        <div className='home flex container'>
            <div className="mainText">
                <h1>CODE GYM AIRLINE</h1>
            </div>
            <div className="homeImages flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className="video"></video>
                </div>
                <img src={aeroplane} className="plane" alt="Image"/>

            </div>
        </div>
    )
}

export default Home