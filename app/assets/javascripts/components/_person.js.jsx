class Person extends React.Component{

  render(){
    return(
      <div>
        <h1>{this.props.person.name}</h1>
        <p>{this.props.person.description}</p>
        <button onClick={() => this.props.handleDelete(this.props.person.id)}>Delete</button>
      </div>
    )
  }
}