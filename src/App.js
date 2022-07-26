import { useEffect, useReducer,useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Items from "./components/Items";
import reducer from "./reducer";
import * as actions from "./actions"

const DATA = [
  {
    id: 1,
    text: "item 1"
  }, 
  {
    id: 2,
    text: "item 2"
  }, 
  {
    id: 3,
    text: "item 3"
  }
];

const initialState = {
  items: [],
};

function App() {
  const [textInput, setTextInput] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: actions.SET_ITEMS,
      payload: {
        items: DATA,
      },
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault()
    if(textInput === "") return 
    dispatch({
      type: actions.ADD_ITEM,
      payload: {
        text: textInput
      }
    })

    setTextInput("")
  }

  const onDelete = (id) => {
    dispatch({
      type: actions.DELETE_ITEM,
      payload:{
        id
      }
    })
  }


  return (
    <div className="App">
      <div className="items-form">
        <InputForm onSubmit={onSubmit} setTextInput={setTextInput} textInput={textInput} />
      </div>
      
      <ul className="items-container">
        <Items state={state} onDelete={onDelete}/>
      </ul>
    </div>
  );
}

export default App;
