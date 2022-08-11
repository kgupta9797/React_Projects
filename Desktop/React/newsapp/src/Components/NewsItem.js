import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let { title, discription, imgurl,newaurl } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imgurl?"https://media.istockphoto.com/vectors/breaking-news-background-vector-id1264074047?k=20&m=1264074047&s=612x612&w=0&h=uMWPkMBKIIx3NdCbvGkfOY0oYXULdpU_-1ggACLAx7A=":imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{discription}...</p>

            <a  rel="noreferrer" href={newaurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>

    )
  }
}

export default NewsItem