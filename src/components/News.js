import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
  
  static defaultProps = {
    country : 'in',
    pageSize : 20,
    category : 'general'
  }
    static PropType = {
      country : PropTypes.string,
      pageSize : PropTypes.number,
      category : PropTypes.string,
    }

    constructor(){
      super();
      console.log("constructor was being called.");
      this.state={
        articles:[],
        loading: false,
        page: 1,
      }
    }
 // `https://gnews.io/api/v4/search?q=example&lang=en&country=${this.props.country}&category=${this.props.category}&max=10&apikey=90709d896a82ed4cc3e829871acac905&pageSize=${this.props.pageSize}`
  async componentDidMount(){
    let url = `https://gnews.io/api/v4/search?q=example&lang=en&country=${this.props.country}&category=${this.props.category}&max=${this.props.pageSize}&apikey=90709d896a82ed4cc3e829871acac905&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePrevClick = async ()=>{
    console.log("previous")
    let url =  `https://gnews.io/api/v4/search?q=example&lang=en&country=${this.props.country}&category=${this.props.category}&max=${this.props.pageSize}&apikey=90709d896a82ed4cc3e829871acac905&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page : this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextClick = async ()=>{
    console.log("next")
    let url = `https://gnews.io/api/v4/search?q=example&lang=en&country=${this.props.country}&category=${this.props.category}&max=${this.props.pageSize}&apikey=90709d896a82ed4cc3e829871acac905&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page : this.state.page + 1,
      articles: parsedData.articles
    })
    
  }
  
  render() {
    const mystyle = {
      backgroundColor: "lightGrey",
      width : "100%"
    }
    return (
      <div id="news-div" className='container my-3' style={mystyle}>
        <h2>NewsMonkey - Top headlines</h2> 
              
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4">
            <NewsItem key={element.url} title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 85):""} imageUrl={element.image} newsUrl={element.url}/>
            </div>
          })}                  
        </div>
        <div class="d-grid  d-md-block d-flex justify-content-center" className="d-flex justify-content-center">
            <button disabled={this.state.page<=1} className="btn btn-dark" type="button" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page>=6} className="btn btn-dark" type="button" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>               
      </div>
    )
  }
}

export default News



//`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c5fd2263f8094e3bb0d7383c3a38ea96&pageSize=${this.props.pageSize}`
