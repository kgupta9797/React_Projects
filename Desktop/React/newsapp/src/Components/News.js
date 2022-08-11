import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

  constructor() {
    super();
    console.log("hello i am constructor rom news ");
    this.state = {
      articles: [],
      loading: false,
      page: 1



    }



  }
  async componentDidMount() {
    console.log("componentDidMount1")
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b68591eda21048229f1081a37911afa7";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b68591eda21048229f1081a37911afa7&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b68591eda21048229f1081a37911afa7&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })

  }
  render() {
    console.log("render")
    return (
      <div className='container my-3' >
        <h2>NewsApp - Top Head lines</h2>
        <div className='row'>
          {this.state.articles.map((elemenet) => { //how many article to be compemont return
            return <div className='col-md-4' key={elemenet.url}>
              <NewsItem title={elemenet.title} discription={elemenet.description} imgurl={elemenet.urlToImage} newaurl={elemenet.url} />
            </div>//properties set to news 
          })}



        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" class="btn btn-warning" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button type="button" class="btn btn-warning" onClick={this.handleNextClick}> Next &rarr;</button>




        </div>

      </div>
    )
  }
}

export default News