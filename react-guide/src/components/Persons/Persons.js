import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
	constructor( props ) {
		super( props );
		console.log('[Person.js] inside constructor', props)
	}

	componentWillMount () {
		console.log('[Person.js] inside componentWillMount')
	}

	componentDidMount () {
		console.log('[Person.js] inside componentDidMount')

	}
	render() {
		return this.props.persons.map( (person, index) => {
	    return <Person
	      click={() => this.props.clicked(index)}
	      name={person.name} 
	      age={person.age}
	      key={person.id}
	      changed={(event) => this.props.changed(event, person.id)} />
	  })
	}
}

// const persons = (props) => props.persons.map((person, index) => {
// 	    return <Person
// 	      click={() => props.clicked(index)}
// 	      name={person.name} 
// 	      age={person.age}
// 	      key={person.id}
// 	      changed={(event) => props.changed(event, person.id)} />
// 	  })

export default Persons;