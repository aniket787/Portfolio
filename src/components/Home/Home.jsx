import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';


import './Home.css';
import homeAnime from './../../assets/home_anime.gif'

class Home extends Component {

    state = { showModal: false };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showModal: true })

        }, 1000)
    }


    closeModal = () => {
        this.setState({ showModal: false })
    }

    render() {
        return (
            <div className="home-container">
                {this.state.showModal && <Modal closeModal={this.closeModal} />}
                <div className="header-text">
                    <h1>Welcome To My Portfolio!</h1>
                    <h3>This is Aniket, a full stack developer, a programmer and a enthusiastic learner.</h3>
                </div>
                <div className="head-btns">
                    <Link to='/about' className='btn btn-white' >
                        <p className="btn-text">Know more about me</p>
                    </Link>
                    <Link to='/contact' className='btn btn-transparent' >
                        <p className="btn-text">Connect with me</p>
                    </Link>
                </div>
                <div className="splash-image">

                </div>
                <img src={homeAnime} alt="animation" className='home-anime' />

            </div>
        )
    }
}
export default Home;