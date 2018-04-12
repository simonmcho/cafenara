import React, { Component } from 'react';

class NavBar extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="">
                        <span>Home</span>
                        </a>
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Menu
                    </li>
                    <li>
                        Order
                    </li>
                </ul>
            </div>
        )
    }


}

export default NavBar;