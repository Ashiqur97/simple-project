import React, { Component } from 'react';
import Events from './Events';
import Books from './Books/Books';
class App extends Component {
  state = {
    books: [
      {
        name: 'javascript',
        price: 40,
        id: 1
      },
      {
        name: 'python',
        price: 50,
        id: 2
      },
      {
        name: 'Bash',
        price: 80,
        id: 3
      },
      {
        name: 'XSS',
        price: 70,
        id: 4
      }

    ]
  }

  deleteHandler = (id) => {
    let newBooks = this.state.books.filter(book => book.id != id)
    this.setState({
      books: newBooks
    })
  }

  changeHandler = (name, id) => {
    let newBooks = this.state.books.map(book => {
      if (id === book.id) {
        return {
          ...book,
          name
        }
      }
      return book
    })

    this.setState({
      books: newBooks
    })

  }


  render() {
    return (
      <div className='App'>
        <Books changeHandler={this.changeHandler.bind(this)} deleteHandler={this.deleteHandler.bind(this)} books={this.state.books} />
      </div>
    );
  }
}

export default App;