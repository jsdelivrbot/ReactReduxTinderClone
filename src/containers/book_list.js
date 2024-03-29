import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map((book, i) => {
      return (
        <li
          key={i}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>
          {book.title}
        </li>
      )
    })
  }

  render () {
    return (
      <ul className='list-group'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps (state) {
// whatever gets returned will show up as prop inside BookList
  return {
    books: state.books
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
