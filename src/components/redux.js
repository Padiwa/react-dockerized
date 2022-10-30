import { configureStore, createSlice } from "@reduxjs/toolkit"
const todoslice = createSlice({
    name:"todo",
    initialState: [
        {id:1,text:'test',done:false}
    ],
    reducers: {
        addTask: (state, actions) => {
            const newTask = {
                id: Date.now(),
                done: false,
                text: actions.payload
            }
            state.push(newTask)
        },
        toggleTask: (state, action) => {
            const task = state.find(t => t.id === action.payload);
            task.done = !task.done;
            
        },
        deleteTask: (state, action) => {
            state = state.filter(t => t.id !== action.payload);
            return state;
        }
    }
})

export const { addTask, deleteTask, toggleTask} = todoslice.actions

export const store = configureStore({
    reducer: {
        todo: todoslice.reducer
    }
})
