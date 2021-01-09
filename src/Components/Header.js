import React from 'react'
import '../Styles/Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Header