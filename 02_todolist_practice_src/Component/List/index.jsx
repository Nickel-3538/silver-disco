import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from "../Item";

class List extends Component {
    static propTypes={
        updateStatus:PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        todos:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            done:PropTypes.bool.isRequired
        })).isRequired,
    }

    render() {
        const {todos,updateStatus,deleteItem}=this.props
        return (
                <ul>
                    {
                        todos.map(todoObj=>{
                            return <Item key={todoObj.id}{...todoObj} deleteItem={deleteItem}  updateStatus={updateStatus}/>
                        })
                    }
                </ul>
        );
    }
}

export default List;