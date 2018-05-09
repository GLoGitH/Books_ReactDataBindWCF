import React, { Component } from 'react';
import BooksList from './BookList';


class BookContainer extends Component 
{
  
  
    render() 
    {
        return (
            <div className="commentBox">
              <h1>Book Details</h1>     
              <BooksList data={this.props.data} />
            </div>
        );
    }
}

export default BookContainer;

