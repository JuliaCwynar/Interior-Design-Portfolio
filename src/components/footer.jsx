import React from 'react'
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import './footer.css'


function Footer() {
    return (
        <div className='footer'>
            <div className='footer--info'>
                <h1>kontakt</h1>
                <p>Maria Zębroń-Kępa</p>
                <p>696-022-336</p>
                <p>loremipsum@gmail.com</p>
                <p>ul. Kijowska 90</p>
                <p>Kraków</p>
                <h1>godziny otwarcia</h1>
                <p>9:00-16:00</p>
            </div>
        </div>
    )
}


export default Footer