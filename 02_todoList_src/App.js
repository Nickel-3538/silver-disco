import React, {Component} from 'react';
import Header from "./Component/Header";
import List from "./Component/List";
import Footer from "./Component/Footer";
import './App.css'

export default class App extends Component {
    state={todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:false},
            {id:'003',name:'敲代码',done:true},
            {id:'004',name:'逛街',done:false},
        ]}
    //用户添加数据
    addTodo=(todoObj)=>{
        const {todos}=this.state
        const newTodos=[todoObj,...todos]
        this.setState({todos:newTodos})

    }
    //updateTodo用于更新一个todo对象
    updateTodo = (id,done)=>{
        //获取状态中的todos
        const {todos} = this.state
        //匹配处理数据
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id) return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }
    deleteTodo=(id)=>{
        //获取原来的todos
        const {todos}=this.state
        //删除指定id的todo对象 过滤掉id为删除的
        const newTodos=todos.filter((todoObj)=>{
            return todoObj.id!==id
        })
        this.setState({todos:newTodos})
    }
    CheckAllTodo = (done) => {
        const { todos } = this.state;
        const newTodos = todos.map(todoObj => ({ ...todoObj, done }));
        this.setState({ todos: newTodos });
    }
    clearAllDone=()=>{
        const {todos}=this.state
        const newTodos=todos.filter((todoObj)=>{
            return !todoObj.done
        })
        //跟新状态
        this.setState({todos:newTodos})
    }
    render() {
        const {todos}=this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} CheckAllTodo={this.CheckAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        );
    }
}
