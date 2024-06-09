import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";


    class App extends Component {
        render() {
            return (
                <BrowserRouter>
                    <div>
                        <div className="row">
                            <div className="col-xs-offset-2 col-xs-8">
                                <div className="page-header"><h2>React Router Demo</h2></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-2 col-xs-offset-2">
                                <div className="list-group">
                                    {/* 使用 Link 组件进行路由导航 */}
                                    <Link className="list-group-item" to="/about">About</Link><br/>
                                    <Link className="list-group-item" to="/home">Home</Link>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="panel">
                                    <div className="panel-body">
                                        {/* 路由设置 */}
                                        <Route path="/home" component={Home}/>
                                        <Route path="/about" component={About}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            );
        }
    }

export default App;
