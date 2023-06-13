import React from 'react'
import './about.css'
import {forwardRef} from 'react'

const About = forwardRef((props, ref) => {

    return (
        <div ref={ref} className='about'>
                <h1>o mnie</h1>
            <div className='row'>
                <div className='about--inf'>
                    <h2>Maria Zembroń Kępa</h2>
                    {about}
                </div>
                <div className='column'>
                    <div className='image'>
                    <img src='https://www.training.com.au/wp-content/uploads/interior-designer.jpeg'></img>
                    </div>
                </div>
            </div>
        </div>
    )
})

const about = <p>Nazywam się Maria Zembroń-Kępa. Jestem żoną i mamą, której pasją jest estetyka w każdym aspekcie życia, a przede wszystkim ta, dotycząca projektowania, urządzania każdego wnętrza. Mój unikalny punkt widzenia wnętrza jest napędzany pasja do przemyślanego, wyjątkowego projektu, który łączy funkcjonalność, wygodę wraz z charakterystyczną, dla każdej osoby, przestrzeni, dzięki czemu mieszkańcy mogą z radością nazywać swoją przestrzeń mieszkalną prawdziwym domem. <br/><br/>Mam za sobą specjalistyczne kursy, posiadam doświadczenie oparte o pierwsze projekty mieszkań, domów, a przede wszystkim własnego wymarzonego domu. Przebywając w różnych krajach, mogłam doświadczyć różnych stylów, technik, aby w sposób praktyczny przenikały moje projekty. <br/>Jestem otwarta, komunikatywna, rzetelna i umiem słuchać, dlatego zapraszam do współpracy</p>


export default About