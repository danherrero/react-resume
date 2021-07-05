import React, { Component } from 'react'

class Experience extends Component {

    render() {
        let experience = require('./data/experience.json');
        return (
            <section className="experience">
  		<h2>Work Experience</h2>

  		{experience.map((item, i) => (
  			<div key={i}>
  				<h3>{item.name}</h3>
  				<p>{item.location}</p>
  			
  				{item.titles.map((title, i) => (
        	    		<h4 key={i}>{title[0]} ({title[1]})</h4>
    			))}
    			<ul>
    			{item.responsibilities.map((responsibility, i) => (
        	    	<li key={i}>{responsibility}</li>
    			))}
				</ul>
    		</div>
  		))}
    </section>
        )
    }
}

export default Experience