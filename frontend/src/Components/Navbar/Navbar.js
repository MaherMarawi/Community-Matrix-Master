import React, { Component } from "react";
import { Button, Menu, Image, Input, Icon } from "semantic-ui-react";
import logo from '../../img/logo.png'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        return (
            <>
            <Menu size="huge" className="h-nav ui top fixed menu" >
                {/* <Image className="logo8" src={logo} /> */}
                <div className="logo-container8"><Icon name="exclamation" className="logo-test"></Icon></div>
                <Link to="/"><Menu.Item icon="home" name="home" active={activeItem === "home"} onClick={this.handleItemClick} /></Link>
               <Link to="/contact"> <Menu.Item icon="comments" name="contact" active={activeItem === "contact"} onClick={this.handleItemClick} /></Link>
               <Link to="/about"><Menu.Item icon="info circle" name="about" active={activeItem === "about"} onClick={this.handleItemClick} /></Link>
                <Menu.Item position="right"><Input className="search8" icon='search' placeholder='Search...' /></Menu.Item>
                <Menu.Menu >
                    <Menu.Item>
                        <Button primary className="btn8 log-in">Log In</Button>
                        <Button primary className="btn8">Sign In</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Menu size="huge" className="v-nav left fixed"  vertical >
                <Menu.Item icon="plus" name="add question" active={activeItem === "add question"} onClick={this.handleItemClick}/>
                <Menu.Item icon="users" name="users" active={activeItem === "users"} onClick={this.handleItemClick}/>
            </Menu>
            </>
        );
    }
}
