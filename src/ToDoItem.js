import React from 'react';
/**
 * 父子组件间通信:
 * 父-->子, 子组件通过props获取父组件中的属性值
 * 子-->父, 子组件需要调用父组件传递过来的方法
 */
class ToDoItem extends React.Component{

    handleDelete() {
        this.props.del(this.props.index);
    }

    render(){
       return(
        <div onClick={this.handleDelete.bind(this)}>
            {this.props.content}
        </div>
       ) 
    }
}

export default ToDoItem;