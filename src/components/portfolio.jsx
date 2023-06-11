import React from 'react'
import './portfolio.css'
import Navbar from './navbar.jsx'
import ProjectTile from './projecttile.jsx'

function Portfolio() {


    return (
        <div>
        <Navbar />
        <div className='portfolio'>
            <div className='title'>
            <h1>zrealizowane projekty</h1>
            </div>
            <div className='project--tiles'>
                <ProjectTile/>
                <ProjectTile/>
                <ProjectTile/>
                <ProjectTile/>
                <ProjectTile/>
                <ProjectTile/>
            </div>
        </div>
        </div>
    )

}

export default Portfolio