import {create} from 'zustand'



export const useTodos = create((set) => ({
    todos: [],
    createTodo: text => {
        set(state => ({
            todos: [...state.todos, {
                id: crypto.randomUUID(),
                title: text,
                isCompleted: false,
            }]
        }))
    },

    deleteTodo: todoId => {
        set(state => ({
            todos: state.todos.filter(todo => todo.id !== todoId),
        }))
    },
    }

));