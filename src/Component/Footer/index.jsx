import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        const {todos}=this.props
        //已完成
        const alradyDone=todos.reduce((pre,todo)=>pre+(todo.done?1:0),0)
        console.log(alradyDone)
        const total=todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"/>
                </label>
                <span>
					<span>已完成{alradyDone}</span> / 全部{total}
				</span>
                <button className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
