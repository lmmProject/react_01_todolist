import React, {Component, Fragment} from 'react';
import ToDoItem from './ToDoItem';
import './style.css';

class ToDoList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            list : [],
            inputValue : ''
        }

        // 提高代码的执行性能
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
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

    // 抽取为函数
    getToDoItems(){
        return(
            this.state.list.map((item, index) => {
                return (
                    <ToDoItem 
                        del={this.handleDelete} 
                        key={index} content={item} 
                        index={index}
                    />
                );
            })
        );
    }

    render(){
        return (
            //  jsx 语法
            <Fragment>
                 <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange} />
                    {/* 第一层括号,指是一个表达式;第二层括号,指的是一个对象 */}
                    <button className='white-font' style={{background: 'red'}} onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>
                    {this.getToDoItems()}
                </ul>
            </Fragment>
        );
    }
}

export default ToDoList;