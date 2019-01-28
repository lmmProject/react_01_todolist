import React from 'react'

class ToDoList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            list : [
                'learn english',
                'learn jsx',
                'learn react'
            ]
        }
    }

    handleBtnClick() {
        this.setState({
            list: [...this.state.list, 'Hello World']
        })
    }

    render(){
        return (
            //  jsx 语法
            <React.Fragment>
                 <div>
                    <input />
                    <button onClick={this.handleBtnClick.bind(this)}>add</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </React.Fragment>
        );
    }
}

export default ToDoList;