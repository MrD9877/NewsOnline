import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let {imgUrl,title,content,newsUrl} = this.props
   
    return (
        <>
        <div className="card" style={{width: "18rem"}}>
        <img src={imgUrl?imgUrl:"Not Found"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
      </>
    )
  }
}

export default Newsitem
