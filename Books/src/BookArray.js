import React, { Component } from 'react';


class BookArray extends Component 
{
    
    constructor(props) 
    {
        super(props);
        var data = [
        { Count : 1, Author: "Shanu",  Bookdesc: "C# Book written by Shanu " ,         NAMES: "C#"},
        { Count : 2, Author: "Afreen", Bookdesc: "C# Book written by Shanu " ,         NAMES: "REACTJS"},
        { Count : 3, Author: "Afraz",  Bookdesc: "ASP.NET MVC Book written by Shanu ", NAMES: "ASP.NET MVC" }
        ];
        this.state = data;

    }


    render() 
    { 
        return(
          <div>{this.props.children}</div>
        )
    }
}

export default BookArray;
