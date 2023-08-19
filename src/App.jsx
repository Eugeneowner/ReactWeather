import React from "react";
import "./App.css"
import Header from "./components/Header"
import Controller from "./components/Controller";
import Temperature from "./components/Temperature";
import WrapperApp from "./components/WrapperApp";
import Weather from "./components/Weather";
import Modal from "./components/Modal";


class App extends React.Component{

    state = {
        temperature: 20,
        isModal: false,
    }
    increase = ()=> {
        if(this.state.temperature < 29){
            this.setState({temperature:this.state.temperature +1})
        }
    }

    decrease =()=>{
            if(this.state.temperature > 0){
                this.setState({temperature:this.state.temperature -1})
            }
    }

    handleModal = () => {
        this.setState(prevState => ({
            isModal:!prevState.isModal,
        }))
    }

    handleOutside = (event) => {
        if(!event.target.closest(".modal")) {
            this.handleModal();
        }
    }
    render() {
        const {temperature, isModal} = this.state;

        return (
            <WrapperApp temperature={temperature}>
                <Header/>
                <Temperature
                    temperature={temperature}
                />
                <Controller
                    increase={this.increase}
                    decrease={this.decrease}
                    showModal={this.handleModal}
                />
                <Weather />
                {isModal && <Modal
                    handleOutside={this.handleOutside}
                    temperature={temperature}
                    closeModal={this.handleModal}/>}
            </WrapperApp>

        )
    }
}

export default App