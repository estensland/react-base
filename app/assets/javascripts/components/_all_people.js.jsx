class AllPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount(){
    fetch('/api/v1/people.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ people: data }) });
  }

  render(){
    var people = this.state.people.map((person) => {
      return(
        <div key={person.id}>
          <p>{person.label}</p>
        </div>
      )
    })

    return(
      <div>
        {people}
      </div>
    )
  }
}