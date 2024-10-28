import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {
  constructor() {
    super()
    this.state = {
      progress: 10,
      apiUrl: "https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=7063cf87382340f995c3f97617d92368"
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

