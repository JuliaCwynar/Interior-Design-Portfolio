import React, { forwardRef } from 'react'
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import './footer.css'


const Footer = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='footer'>
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
            <div className='footer--img'>
                <img src='https://loyaltytraveler.boardingarea.com/wp-content/uploads/2018/08/Google-Maps-HGI-Krakow.png'></img>
            </div>
        </div>
    )
}
)


export default Footer