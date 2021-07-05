import React, { Component } from 'react'

class Experience extends Component {

render() {
  let experience = require('./data/experience.json');
  return (
  	<div>
  		<h2>Work Experience</h2>
  		{experience.map(item => (
  			<div><h3>{item.name}</h3>
  			<p className="location">{item.location}</p></div>
  		))}
    </div>
  )
 }
}

export default Experience