import React, { Component } from 'react'
import me from '../assets/dan.jpeg';

class About extends Component {

render() {
  return (
     <section className="about">
     	<h2><span>About Me</span></h2>
     	<div>
     	<p>My name is Dan Herrero, and I am a web developer living in the Lehigh Valley of Pennsylvania. For the past seven years, I have been specializing in Drupal development at Lehigh University.</p>
     	<img src={me} alt="Dan smiling" className="img-fluid circle-image" />
     	</div>
     </section>
  )
 }
}

export default About