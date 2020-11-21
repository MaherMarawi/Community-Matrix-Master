import React, { Component } from "react";
import { Button, Menu, Image, Input, Icon } from "semantic-ui-react";
import logo from '../../img/logo.png'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    state = { activeItem: "questions", loggedIn: false, user: null };
    componentDidMount = () => {
        const token = localStorage.getItem('Token')
        if(token) this.setState({loggedIn: true})
        const user = JSON.parse(sessionStorage.getItem('User')) 
        this.setState({user: user})
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        return (
            <div>
            <Menu size="huge" className="h-nav ui top fixed menu" >
                {/* <Image className="logo8" src={logo} /> */}
                <div className="logo-container8"><Icon name="exclamation" className="logo-test"></Icon></div>

                <Link to="/"><Menu.Item icon="home" name="home" active={activeItem === "home"} onClick={this.handleItemClick} /></Link>

                <Link to="/about"><Menu.Item icon="info circle" name="about" active={activeItem === "about"} onClick={this.handleItemClick} /></Link>

               <Link to="/contact"> <Menu.Item icon="comments" name="contact" active={activeItem === "contact"} onClick={this.handleItemClick} /></Link>

                

                <Menu.Menu style={{marginLeft:'47%'}} >
                    <Menu.Item>
                        <Link to={this.state.loggedIn ? '/Auth/logout' : '/Auth/LogIn'} ><Button primary className="btn8 log-in">{this.state.loggedIn ? 'Logout' : 'Login'}</Button></Link> 
                        {!this.state.loggedIn ? 
                        <Link to='/Auth/SignUp' ><Button primary className="btn8">Sign Up</Button></Link> 
                        : <label>Welcom <b style={{color: 'orange'}} >{this.state.user?.username}</b></label>  }
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Menu size="huge" className="v-nav left fixed"  vertical >
            <Link to='/community'><Menu.Item icon="question circle" name="questions" active={activeItem === "questions"} onClick={this.handleItemClick}/></Link>
            <Link to='/AddQuestions'><Menu.Item icon="plus" name="add question" active={activeItem === "add question"} onClick={this.handleItemClick}/></Link>
            
            <Link to='/users'><Menu.Item icon="users" name="users" active={activeItem === "users"} onClick={this.handleItemClick}/></Link>
            {this.state.user && this.state.user ? 
            <Link to={`/profile/${this.state.user.id}`}><Menu.Item icon="user" name="profile" active={activeItem === "profile"} onClick={this.handleItemClick}/></Link>
            : ''}
            </Menu>
            </div>
        );
    }
}
