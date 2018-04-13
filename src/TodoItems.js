import React, { Component } from "react";
import FlipMove from 'react-flip-move';


class TodoItems extends Component {
    constructor(props){
        super(props);
        
        this.createTasks = this.createTasks.bind(this);
        
        
    }
    
    delete(key){
        this.props.delete(key);
    }
    
     
    
    createTasks(item){
        return <li style={{
                            textDecoration: this.props.done ? "line-through" : "none",
                            color: this.props.done ?  "rgba(0, 0, 0, 0.5)" : "rgb(0, 0, 0)"
                            
                         }}
                key={item.key}>{item.text}
                    <button onClick={()=>this.delete(item.key)} className="delete">
                        <i className="material-icons" style={{fontSize: '200%', color: 'rgb(255, 255, 255)' }}>delete_forever</i>
                    </button>
                </li>
    }
    
    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        
        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
    
    
    
}

export default TodoItems;