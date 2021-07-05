import React, {Component} from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'

class App extends Component {
  render() {
    return (
      <div className="Resume">
        <Header />
        <About />
        <Experience />
        <Education />
      </div>
    )
  }
}

export default App