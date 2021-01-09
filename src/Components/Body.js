import React from 'react'
import '../Styles/Body.css'

class Body extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div id="container">
                <section>
                    <p>Home</p>
                </section>
                <section>
                    <p>About</p>
                </section>
                <section>
                    <p>Projects</p>
                </section>
                <section>
                    <p>Contact</p>
                </section>
            </div>
        )
    }
}

export default Body