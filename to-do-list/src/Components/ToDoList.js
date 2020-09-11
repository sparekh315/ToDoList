import React, {Component} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewToDoForm';
import './ToDoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    };  
    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };
     remove(id){
         this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
     };
     update(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return{...todo, task: updatedTask};
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
     };
     toggleComplete(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return{...todo, completed: !todo.completed};
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
     }

    render() {

        const todos = this.state.todos.map(todo => {
            return <Todo  
                        id={todo.id} 
                        key={todo.id} t
                        task={todo.task} 
                        completed={todo.completed}
                        removeTodo={this.remove}
                        updateTodo={this.update}
                        toggleTodo={this.toggleComplete}
                    />
        })
        return(
            <div className='ToDoList'>
                <h1>
                    Daily ToDos! <span>A Simple React ToDo List Front-End App</span>
                </h1>
                <ul>
                    {todos}
                 </ul>
                 <NewTodoForm createTodo={this.create} />
            </div>
        )
    };
};



export default TodoList;