import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>

        <Routes>
          <Route path="/"
            element={<News key="general" pageSize={5} country='in' apiKey='e3ae11a7be294f689cd35aeaac650fae' category='general' />} />
          <Route path="/business"
            element={<News key="business" pageSize={5} country='in' apiKey='e3ae11a7be294f689cd35aeaac650fae' category='business' />} />
          <Route path="/entertainment"
            element={<News key="entertainment" pageSize={5} country='in' apiKey='e3ae11a7be294f689cd35aeaac650fae' category='entertainment' />} />
          <Route path="/health"
            element={<News key="health" pageSize={5} country='in' apiKey='e3ae11a7be294f689cd35aeaac650fae' category='health' />} />
          <Route path="/science"
            element={<News key="science" pageSize={5} country='in' apiKey='e3ae11a7be294f689cd35aeaac650fae' category='science' />} />
          <Route path="/sports"
            element={<News key="sports" pageSize={5} country='in' apiKey='e3ae11a7be294f689cd35aeaac650fae' category='sports' />} />
          <Route path="/technology"
            element={<News key="technology" pageSize={5} country='in' apiKey='e3ae11a7be294f689cd35aeaac650fae' category='technology' />} />
        </Routes>
        </Router>
      </div>
    )
  }
}
