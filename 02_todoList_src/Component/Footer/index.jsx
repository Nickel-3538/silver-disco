import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    handleCheckAll=(event)=>{
        this.props.CheckAllTodo(event.target.checked)
    }
    handleClearAll=(event)=>{
        this.props.clearAllDone()
    }
    render() {
        const {todos}=this.props
        //已完成
        const alreadyDone=todos.reduce((pre,todo)=>pre+(todo.done?1:0),0)
        console.log(alreadyDone)
        const total=todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={alreadyDone===total&&total!==0?true:false} onChange={this.handleCheckAll}/>
                </label>
                <span>
					<span>已完成{alreadyDone}</span> / 全部{total}
				</span>
                <button onClick={this.handleClearAll} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
