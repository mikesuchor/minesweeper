import React from 'react'

class Square extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }
    }

    handleClick = () => {
        if(!this.state.clicked) {
            this.setState({
                clicked: true
            })
        }
        if(this.props.mine === true) {
            alert("dead");
        }
    }

    render() {
        let className = 'squareNotClicked'
        if(this.state.clicked) {
            className = 'squareClicked'
        }
        const squareStyle = {
            margin: 0,
            padding: 0,
            width: '30px',
            height: '30px'
        }
        return(
            <button className={className} style={squareStyle} onClick={this.handleClick}>
            </button>
        )
    }
}

export default Square