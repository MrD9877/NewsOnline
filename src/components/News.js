import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps={
    pageSize: 10,
  }
  // static propsType={
  //   pageSize:this.pageSize,
  //   apiUrl:this.apiUrl,
  //   // testing:this.testing

  // }
  constructor() {
    super();
    this.state = {
    article : this.article,
    loading : this.loading,
    page: 1,
    totalResults : this.totalResults,
  };

}

  fechapi = async (p)=>{
   this.props.setProgress(20)
    let url = `${this.props.apiUrl}&pageSize=${this.props.pageSize}&page=${this.state.page+p}`;
    let data = await fetch(url);
    let jsonData = await data.json();
   this.props.setProgress(50)
    this.setState({article: jsonData.articles,});
    this.setState({totalResults: jsonData.totalResults});
   this.props.setProgress(100)
   console.log(this.props.testing)

    
  }

   async componentDidMount(){
    this.fechapi(0);
   }

  
  //  handleClick = (p)=>{
  //   this.setState((prevState) => ({ 
  //     page: prevState.page + p 
  //  }))
  //   this.fechapi(p);
  // }

  fetchMoreData = async() => {
    this.setState((prevState) => ({ 
      page: prevState.page + 1 
   }))
    let url = `${this.props.apiUrl}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
    let data = await fetch(url);
    let jsonData = await data.json();
    this.setState({article: this.state.article.concat(jsonData.articles)});
    this.setState({totalResults: jsonData.totalResults});

  };

  checkRemovedResult = (element)=>{
    return 1
    // if(!element.urlToImage){
    //   return 0
    // }
    // else return 1
  }

  render() {
    return (
      <>
      <div className='container my-4'style={{overflow:"hidden"}}>
        <h2>Todays Headlines-newz</h2>
        {this.state.article?<InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==(this.state.totalResults-2)&&this.state.article.length<70}
          loader={<Loading/>}
        >
        <div className="row my-3 ">
          {this.state.article.map((element)=>{
            if(this.checkRemovedResult(element))
           return <div className="col-md-4" key={element.url}>
        <Newsitem imgUrl={element.urlToImage?element.urlToImage : ""} title = {element.title?element.title.slice(0,54):""}
         content =  {element.description?element.description.slice(0,88):""} newsUrl={element.url?element.url:""}/>
            </div>
            else{
              return null;
            }
          })}
        </div>
        </InfiniteScroll>:<Loading height={"50vh"}/>}
      </div>
      </>
    )
  }
}

export default News
