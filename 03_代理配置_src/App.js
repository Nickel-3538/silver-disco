import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
    getStudentData = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => { console.log('成功', response.data); },
            error => { console.log('失败了', error.message); } // 更改为 error.message
        )
    }

    getCarData = () => {
        axios.get('http://localhost:3000/api2/cars').then( // 修改 URL，以正确获取车辆数据
            response => { console.log('成功', response.data); },
            error => { console.log('失败了', error.message); }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                <button onClick={this.getCarData}>点我获取车辆数据</button> // 修改按钮文本
            </div>
        );
    }
}

export default App;
