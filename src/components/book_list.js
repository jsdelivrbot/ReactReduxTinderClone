import React, { Component } from 'react'
// import renderList, { Component } from 'react'

export default class BookList extends Component {
  renderList () {
    return this.prop.books.map((book, i) => {
      return <li key={i} className='list-group-item'>{book.title}</li>
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
