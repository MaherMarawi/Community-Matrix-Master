import React, { Component } from "react";
import { Button, Menu, Image, Input, Icon } from "semantic-ui-react";
import logo from '../../img/logo.png'

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
                <Menu.Item icon="home" name="home" active={activeItem === "home"} onClick={this.handleItemClick} />
                <Menu.Item icon="comments" name="contact" active={activeItem === "contact"} onClick={this.handleItemClick} />
                <Menu.Item icon="info circle" name="about" active={activeItem === "about"} onClick={this.handleItemClick} />
                <Menu.Item position="right"><Input className="search8" icon='search' placeholder='Search...' /></Menu.Item>
                <Menu.Menu >
                    <Menu.Item>
                        <Button primary className="btn8 sing-up">Sign Up</Button>
                        <Button primary className="btn8">Sign In</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Menu size="huge" className="v-nav left fixed"  vertical >
                <Menu.Item icon="plus" name="add question" active={activeItem === "add question"} onClick={this.handleItemClick}/>
                <Menu.Item icon="user" name="user" active={activeItem === "user"} onClick={this.handleItemClick}/>
            </Menu>
            </>
        );
    }
}
