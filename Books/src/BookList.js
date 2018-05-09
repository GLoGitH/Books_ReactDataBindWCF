import React, { Component } from 'react';
import BookArray from './BookArray';

class BooksList extends Component 
{

    render() 
    {
        var bookDetails = 
          this.props.data.map(function (book) 
          {
            return (
              <BookArray>
                  <b>No.  </b>             {book.Count} 
                  <b> Author : </b>        {book.Author} 
                  <b> Book Desc :   </b>   {book.Bookdesc}
                  <b> Author Name :  </b>  {book.NAMES}
                 <br />
              </BookArray>
            );
          });
 
        return (
        <div>
          {bookDetails}
        </div>
        );
    }
}    

export default BooksList;
