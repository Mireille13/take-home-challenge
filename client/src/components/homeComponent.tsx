import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
//import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


useEffect(() => {
    const homePage() => {
        const navigate = useNavigate();

        const navigateToCityEvents = () => {
            navigate(`/explore?c=popular&t=week&p=1&city=${city}`)
        }
        document.title = 'Where are you looking for experiences?';
        return(
            <div>
            <button onClick={navigateToCityEvents}></button>
            </div>
        )
    }
})

export default homeComponent;
