import React, {Component} from 'react';
import Header from "./Component/Header";
import Item from "./Component/Item";
import Footer from "./Component/Footer";
import List from "./Component/List";

class App extends Component {
    state={todos:
            [
                {id:'001',name:'打LOL',done:true},
                {id:'002',name:'打CF',done:false},
                {id:'003',name:'打QQ飞车',done:false},
                {id:'004',name:'打部落冲突',done:true},
            ]}
    addTodo=(todoObj)=>{
        const {todos}=this.state
        const newTodos=[todoObj,...todos]
        this.setState({todos: newTodos})
    }
    updateStatus=(id,done)=>{
        const {todos}=this.state
        const newTodos=todos.map((todoObj=>{
            if (todoObj.id===id)return{...todoObj,done}
            else return todoObj
        }))
        this.setState({todos: newTodos})
    }
    deleteItem=(id)=>{
        const {todos} = this.state;
        const newTodos = todos.filter(todoObj => {
            return todoObj.id !== id;
        });
        this.setState({todos: newTodos});
    }
    CheckAll=(done)=>{
        const {todos}=this.state
        const newTodos=todos.map(todoObj=>({
            ...todoObj,done
        }))
        this.setState({todos:newTodos})
    }
    render() {
        const {todos}=this.state
        return (
            <div>
                <Header addTodo={this.addTodo}/>
                <List todos={todos} deleteItem={this.deleteItem} updateStatus={this.updateStatus}/>
                <Footer todos={todos} CheckAll={this.CheckAll}/>
            </div>
        );
    }
}

export default App;