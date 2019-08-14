import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/about/About'
import Expreience from './components/expreience/Expreience'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import UIShowcase from './components/projects/UI'
import Education from './components/education/Education'

const route = (
  <Switch>
    <Route path="/about" component={ About }></Route>
    <Route path="/expreience" component={ Expreience }></Route>
    <Route path="/skills" component={ Skills }></Route>
    <Route exact path="/education" component={ Education }></Route>
    <Route exact path="/projects" component={ Projects }></Route>
    <Route path="/projects/uishowcase" component={ UIShowcase }></Route>
  </Switch>
)

export default route