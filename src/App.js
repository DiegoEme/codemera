import { useEffect, useReducer,useState } from "react";
import "./App.css";
import reducer from "./reducer";

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
      type: "set_items",
      payload: {
        items: DATA,
      },
    });
  }, []);

  const handleAdd = () => {
    if(textInput === "") return 
    dispatch({
      type: "add_item",
      payload: {
        text: textInput
      }
    })

    setTextInput("")
  }


  return (
    <div className="App">
      <div>
        <input type="text"  value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
        <button onClick={handleAdd}>add</button>
      </div>
      
      <ul className="items-container">
        {state.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
