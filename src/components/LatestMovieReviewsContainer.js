import React from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '7076a634d44540b8837f308455f18927'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`

export default class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: []
    }
  }

  componentWillMount= () => {
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({
        reviews: data.results
      }))
  }

  render = () => {
   return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
   )}

}
