import React from 'react';
/**
 * 父子组件间通信:
 * 父-->子, 子组件通过props获取父组件中的属性值
 * 子-->父, 子组件需要调用父组件传递过来的方法
 */
class ToDoItem extends React.Component{

    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const {del, index} = this.props;
        del(index);
        // this.props.del(this.props.index);
    }

    render(){
        const {content} = this.props
       return(
        <div onClick={this.handleDelete.bind(this)}>
            {content}
        </div>
       ) 
    }
}

export default ToDoItem;