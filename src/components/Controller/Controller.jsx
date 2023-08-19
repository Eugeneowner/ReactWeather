import React from "react";

class  Controller extends React.Component {
    render() {
        const {increase, decrease, showModal} = this.props

        return(
            <div className="widget-controllers">
                <div className="button-container">
                    <button className="button" onClick={decrease} type="button">Cold</button>
                    <button className="button" onClick={increase} type="button">Hot</button>
                    <button className="button" onClick={showModal} type="button">Modal</button>
                </div>
            </div>
        )
    }
}

export default Controller;
