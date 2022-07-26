const InputForm = ({textInput, setTextInput, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
          <input autoFocus type="text"  value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
          <button type="submit">add</button>
        </form>
    )
}

export default InputForm