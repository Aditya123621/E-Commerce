How useReducer works

<!-- import { Reducer, useReducer } from "react";

const App=()=>{
  function reducer(state,action){
    switch(action.type){
      case 'incrementIt': return { count:state.count+1}
      case 'decrementIt': return {count:state.count-1}
      default:return state
    }
  }
  function increment(){
    dispatch({type:'incrementIt'})
  }
  function decrement(){
    dispatch({type:'decrementIt'})
  }
  // dispatch will call reducer function given certain parameters
  // count:0 is the initial value 
  const [state,dispatch]=useReducer(reducer,{count:0})
  return(
    <div>
      <button onClick={increment}>Add</button>
      <h1>{state.count}</h1>
      <button onClick={decrement}>Sub</button>
    </div>
  )
}

export default App -->