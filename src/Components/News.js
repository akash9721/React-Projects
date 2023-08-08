import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import NavBar from './NavBar';
import Spinner from './Spinner';
export class News extends Component {

   static defaultProps = {
      country: 'in',
      category: 'general',
      pageSize: '19'
    }

   constructor(props) {
      super(props);
      this.state = {
         articles: [],
         headline: "Headlines",
         loading: false,
         page: 1
      };
      document.title=`${this.props.category}- NewsKhabar`
   }

   async componentDidMount() {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51438e0707f542ed9db6462518a4e403&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsData = await data.json();
      console.log(parsData);
      this.setState({
         articles: parsData.articles,
         totalResults: parsData.totalResults,
         loading: false
      })
   }

   previousPage = async () => {
      console.log("previous");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51438e0707f542ed9db6462518a4e403&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsData = await data.json();
      console.log(parsData);
      this.setState({
         page: this.state.page - 1,
         articles: parsData.articles,
         loading: false
      })
   }

   nextPage = async () => {
      console.log("next");
      if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51438e0707f542ed9db6462518a4e403&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
         this.setState({loading: true});
         let data = await fetch(url);
         let parsData = await data.json();
         console.log(parsData);
         this.setState({
            page: this.state.page + 1,
            articles: parsData.articles,
            loading: false
         })
      }
   }

   render() {
      return (
         <>
            <NavBar/>
            <div className='container my-3'>
               <h2 className='text-center'>NewsKhabars-Top {this.state.headline} of {this.props.category}</h2>
               {this.state.loading && <Spinner/>}
               <div className="row my-4 justify-content-center">
                  {
                     this.state.articles.map((element) => {
                     return <div className="col-md-3 my-2" >
                              <NewsItem  title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 100) : ""}
                                 imgUrl={element.urlToImage} newsUrl={element.url} publiceDate={element.publishedAt} author={element.author}/>
                           </div>
                     })
                  }
               </div>
               <div className="container d-flex justify-content-between">
                  <button type="button" className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.previousPage}>&larr; Previous</button>
                  <button type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.nextPage}>Next &rarr;</button>
               </div>
            </div>
         </>
      )
   }
}

export default News


