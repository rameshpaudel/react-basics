import React,{ Component} from 'react'

class ClickCounter extends Component{
    constructor(props){
        super(props);
        this.state ={
            counter : 0,
            title: ''
        }
    }

    componentDidMount(){
        this.setState({
            title: "This is a click counter"
        })
    }

    componentWillUnmount(){
        alert("On the process of removing")
    }

    
    onClickHandler =() =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){
        return(
            <div className="center">
                <h5>{this.state.title}</h5>
                {this.props.heading && <h1>{this.props.heading}</h1>}
                <h3>{this.state.counter}</h3>  
                <button onClick={this.onClickHandler}>Click Here</button>

            </div>
        )
    }

}

export default ClickCounter;

