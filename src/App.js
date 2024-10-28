import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {
  constructor() {
    super()
    this.state = {
      progress: 10,
      apiUrl: "https://newsapi.org/v2/everything?q=apple&from=2024-09-16&to=2024-09-16&sortBy=popularity&apiKey=f176f5d05ab5455b9be2595fe143d8fe"
    }
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <News pageSize={6} setProgress={this.setProgress} apiUrl={this.state.apiUrl} testing={999} />
      </>
    )
  }
}

export default App

