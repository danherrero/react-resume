import React from 'react';
import Accordion from './Accordion';


const Work = () => {

    const workSamples = require('./data/work-samples.json');

    return (
        <section className="work-samples">      
            <h2><span>Portfolio</span></h2>
            <div className="accordion">
            {workSamples.map(({ title, content, imageName, type, link, id }) => (
              <Accordion key={id} title={title} content={content} imageName={imageName} type={type} link={link} />
            ))}
            </div>
          </section>
    )
}

export default Work;