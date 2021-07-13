import React from 'react'

const Experience = () => {
          const experience = require('./data/experience.json');

          return (
            <section className="experience">

      <h2><span>Work Experience</span></h2>
      <div>
      {experience.map((item, i) => (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>{item.location}</p>
        
          {item.titles.map((title, i) => (
                  <h4 key={i}>{title[0]} <span className="date-range">({title[1]})</span></h4>
          ))}
          <ul>
          {item.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
          ))}
        </ul>
        </div>
      ))}
      </div>
    </section>
        )

}


export default Experience