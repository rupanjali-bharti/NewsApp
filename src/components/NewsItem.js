import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imageUrl?imageUrl:"https://tse1.mm.bing.net/th?id=OIP.yom7McGH2PXxr3SXDXKT9wHaE8&pid=Api&P=0&h=180"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} rel="noreferrer"  className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
