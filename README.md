# 注意:
## 1.如果要改变state中的数据，不要直接去操作,我们要首先定一个副本，性能、可调式性都可以达到最优  
## 2.在es6中,如果键和值一样,可以直接写  
# 父子组件之间通信:  
## 1.父-->子, 子组件通过props获取父组件中的属性值  
## 2.子-->父, 子组件需要调用父组件传递过来的方法  
# 代码优化:  
## 1.constructor里面做this.handleInputChange = this.handleInputChange.bind(this);  
## 2. const {del, index} = this.props; del(index);等价于this.props.del(this.props.index);  