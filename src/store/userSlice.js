import { createSlice } from "@reduxjs/toolkit"

let user = createSlice({
    name : 'user',
    initialState : {name:'kang', age:20},
    reducers : {
        changeName(state){
            state.name = 'john '+state.name
            // return {name:'john ' + state.name, age:20}
        },
        changeAge(state, action){
            state.age = state.age+action.payload
        }
    }
})


export let { changeName, changeAge /* ,함수2, 함수3,.... */ } = user.actions

export default user;