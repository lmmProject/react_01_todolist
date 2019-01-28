import React from 'react'
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            list : [],
            inputValue : ''
        }
    }

    handleBtnClick() {
        this.setState({
            list : [...this.state.list,  this.state.inputValue],
            inputValue : ''
        })
    }

    handleInputChange(e) {
        this.setState({
            inputValue : e.target.value
        })
    }

    handleDelete(index){
        // 如果要改变state中的数据，不要直接去操作
        // 我们要首先定一个副本，性能、可调式性都可以达到最优
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            // list : list
            // 在es6中,如果键和值一样,可以直接写
            list
        })
    }

    render(){
        return (
            //  jsx 语法
            <React.Fragment>
                 <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
                    <button onClick={this.handleBtnClick.bind(this)}>add</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <ToDoItem del={this.handleDelete.bind(this)} key={index} content={item} index={index}/>
                        })
                    }
                </ul>
            </React.Fragment>
        );
    }
}

export default ToDoList;