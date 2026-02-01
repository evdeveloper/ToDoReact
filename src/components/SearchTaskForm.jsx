import Field from "./Field"
const SearchTaskForm = (props) => {
  const { onSearchInput } = props
  return (
    <form 
      className="todo__form"
      onSubmit={(e) => e.preventDefault()}
    >
      <Field 
        className="todo__field" 
        id="search-task"
        type="text" 
        label="Search task"
        onInput={({target}) => onSearchInput(target.value)}
      />
    </form>
  )
}

export default SearchTaskForm