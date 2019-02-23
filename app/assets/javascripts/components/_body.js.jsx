class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewPerson = this.addNewPerson.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.deletePerson = this.deletePerson.bind(this)
  }

  handleFormSubmit(name, description){
    let body = JSON.stringify({person: {name: name, description: description}})
    fetch('http://localhost:3000/api/v1/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {
      return response.json()
    }).then((person) => {
      this.addNewPerson(person)
    })
  }

  addNewPerson(person){
    this.setState({
      people: this.state.people.concat(person)
    })
  }

  componentDidMount(){
    fetch('/api/v1/people.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ people: data }) });
  }

  handleDelete(id){
    fetch(`http://localhost:3000/api/v1/people/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.deletePerson(id)
    })
  }

  deletePerson(id){
    newPeople = this.state.people.filter((person) => person.id !== id)
    this.setState({
      people: newPeople
    })
  }

  render(){
    return(
      <div>
        < NewPerson handleFormSubmit={this.handleFormSubmit} />
        < AllPeople people={this.state.people} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}