import React from "react";

class WrapperApp extends React.Component {

    render() {
        const {temperature, children} = this.props;
        const backgoundColor = () => {
            const currentClass = ["widget-container"]
            if(temperature<10){
                currentClass.push("cold")
            } else if(temperature>20){
                currentClass.push("hot")
            } else {
                currentClass.push("neutral")
            }
            return currentClass.join(" ")
        }

        return (
            <div className={backgoundColor()}>
                {children}
            </div>
        )
    }
}

export default WrapperApp;

