import React, { Component } from 'react'
import me from '../assets/dan.jpeg';

class About extends Component {

render() {
  return (
     <section className="about">
     	<h2><span>About Me</span></h2>
     	<div>
     	<p>My name is Dan Herrero, and I am a web developer living in the Lehigh Valley of Pennsylvania. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
     	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
     	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
     	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
     	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
     	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     	<img src={me} alt="Dan smiling" className="img-fluid circle-image" />
     	</div>
     </section>
  )
 }
}

export default About