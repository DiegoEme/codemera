const Items = ({state, onDelete}) => {

    return (
        state.items.map((item) => (
            <li key={item.id}>
              <span>{item.text}</span>
              <button onClick={() => onDelete(item.id)}>del</button>
            </li>
        ))
    )
}

export default Items