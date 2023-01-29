import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
            <a href="contact" target='_blank'>click here to contact page for a tag</a><br></br>
            <Link to='contact' target='_blank'> contact page</Link>
        </div>
    )
}

export default About