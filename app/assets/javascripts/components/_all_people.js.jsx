const AllPeople = (props) => {
  var people = props.people.map((person) => {
    return(
      <div key={person.id}>
        <Person person={person} handleDelete={props.handleDelete}/>
      </div>
    )
  })

  return(
    <div>
      {people}
    </div>
  )
}