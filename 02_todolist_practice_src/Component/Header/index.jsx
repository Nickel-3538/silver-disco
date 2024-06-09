import React, {Component} from 'react';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";

class Header extends Component {
    static ={
        addTodo:PropTypes.func.isRequired
    }
    handleKeyUp=(event)=>{
        const {keyCode,target}=event
        if (keyCode!=13)return
        if (target.value.trim()===''){
            alert("输入不能为空")
            return
        }
        const todoObj={id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)
        target.value=''
    }
    render() {
        return (
            <div>
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入要添加的名称"/>
            </div>
        );
    }
}

export default Header;