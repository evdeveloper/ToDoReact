import Field from "./Field"
const SearchTaskForm = (props) => {
  const { 
    searchQuery,
    setSearchQuery
   } = props
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
        value={searchQuery}
        onInput={({target}) => setSearchQuery(target.value)}
      />
    </form>
  )
}

export default SearchTaskForm