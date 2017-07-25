// Code SearchableMovieReviewsContainer Here

import React from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '7076a634d44540b8837f308455f18927'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentWillMount= () => {
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({
        reviews: data.results
      }))
  }

  handleSubmit = (event) => {

  }

  handleChange = (event) => {
    this.setState = {
      searchTerm: 
    }

  }

  render = () => {
   return (
      <div className="searchable-movie-reviews">

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}/>
          <button type='submit'>Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
   )}

}
