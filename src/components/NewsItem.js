import React, { Component } from 'react'
import noImage from './../images/missing_image.jpeg';

export class NewsItem extends Component {
  
    render() {
    let {title, description, imageUrl, newsUrl, date, author, source} = this.props
    
    return (
      <div className='my-3'>

        <div className="card">
            <img src={imageUrl ? imageUrl : noImage } className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{title}
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'80%',zIndex:'1'}}>
                {source}
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small>
                By <span className="badge bg-primary">{!author? "Unknown" : author}</span>
                on <span className="badge bg-success">{new Date(date).toDateString()}</span>
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
