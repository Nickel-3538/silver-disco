import React, {Component} from 'react';

class Item extends Component {
    state={
        mouse:false
    }
    handleMouse=(flag)=>{
        return()=>{
            this.setState({mouse:flag})
        }
    }
    handleCheck = (id) => {
        return (event) => {
            this.props.updateStatus(id, event.target.checked)
        }
    }
    handleDelete = (id) => {
        return () => {
            if (window.confirm("确认要删除吗？")) {
                this.props.deleteItem(id)
            }
        }
    }
    render() {
        const {id, name, done} = this.props;
        const {mouse}=this.state
        return (
            <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}            >
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)}>删除</button>
            </li>
        );
    }
}

export default Item;
