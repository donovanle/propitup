import React, { Component } from 'react'

export class PersonCard extends Component {
  render() {
    const {lastname, firstname, age, haircolor} = this.props
    return (
        <div>
            <h1>{lastname}, {firstname}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {haircolor}</p>
        </div>
      
    )
  }
}

export default PersonCard

// person card display first name , and last name in h1
// age in p 
// hair color in p