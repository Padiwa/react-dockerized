import { configureStore, createSlice } from "@reduxjs/toolkit"
const loadState = () => {
     const saved = localStorage.getItem("todo");
     const initialValue = JSON.parse(saved);
     return initialValue ? initialValue : [{id:1,text:'test',done:false}];
 }
const todoslice = createSlice({
    name:"todo",
    initialState: loadState(),
    reducers: {
        addTask: (state, actions) => {
            const newTask = {
                id: Date.now(),
                done: false,
                text: actions.payload
            }
            state.push(newTask)
            localStorage.removeItem("todo");
            localStorage.setItem("todo", JSON.stringify(state));
            
        },
        toggleTask: (state, action) => {
            const task = state.find(t => t.id === action.payload);
            task.done = !task.done;
            localStorage.removeItem("todo");
            localStorage.setItem("todo", JSON.stringify(state));

        },
        deleteTask: (state, action) => {
            state = state.filter(t => t.id !== action.payload);
            localStorage.removeItem("todo");
            localStorage.setItem("todo", JSON.stringify(state));

            return state;
        },
        editTask: (state, action) => {
            const task = state.find(t => t.id === action.payload.id);
            task.text = action.payload.text;
            localStorage.removeItem("todo");
            localStorage.setItem("todo", JSON.stringify(state));

        },
    }
})

export const { addTask, deleteTask, toggleTask, editTask} = todoslice.actions
export const store = configureStore({
    reducer: {
        todo: todoslice.reducer
    }
})
