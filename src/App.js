import React, {Component} from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="Resume">
        <Header />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </div>
    )
  }
}

export default App