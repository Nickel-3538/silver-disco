import React,{Component} from "react";
import hello from './index.module.css'
export default class Hello extends Component{
    render() {
        return <div className={hello.title}>恭喜你学了一半</div>
    }
}
