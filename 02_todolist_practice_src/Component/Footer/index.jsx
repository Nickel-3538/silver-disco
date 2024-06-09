import React, {Component} from 'react';

class Footer extends Component {

    handleAllCheck=(event)=>{
        this.props.CheckAll(event.target.checked)
    }
    render() {
        const {todos}=this.props
        const alreadyFinish=todos.reduce((pre,current)=>pre+(current.done?1:0),0)
        console.log(alreadyFinish)
        const total=todos.length
        return (
            <div>
                <input type="checkbox" checked={alreadyFinish===total&&alreadyFinish!==0} onChange={this.handleAllCheck}/>
                <label>已完成{alreadyFinish}</label>/全部{total}
            </div>
        );
    }
}

export default Footer;