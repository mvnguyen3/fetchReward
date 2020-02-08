import React from "react";

export class SimpleCalculation extends React.Component{
    constructor(){
        super();
        this.state = {
            facInput: 0,
            factValue: 0
        }
    }

    changeInput = (e) => {
        let target = e.target;
        let classlist = target.classList.toString();
        if(classlist.indexOf("facInput") >= 0){
            console.log(target.value);
            this.setState({
                facInput: target.value
            })
        }
    }
    calculateFac = () => {
        function helper(value){
            if(value == 0)
                return 0;
            if(value == 1)
                return 1;
            return value*helper(value-1);
        }
        let result = helper(this.state.facInput);
        this.setState({
            factValue:  result
        })
    }

    render(){
        return(
            <div>
                <p>Factorial Calculation</p>
                <input onChange={this.changeInput} className="facInput" value={this.state.facInput} />
                <button onClick={this.calculateFac}>Calculate</button>
                <p>{this.state.factValue}</p>
            </div>
        )
    }
        
}