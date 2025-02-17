import React, {createContext, useState, useReducer,useEffect} from 'react'
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    // const [books, setBooks] =useState([
    //     {title:"Name of the wind", author:"Patrick Rothfuss", id:1},
    //     {title:"The final empire", author:"Brandon Sanderson", id:2}
    // ])

    const [books, dispatch] =useReducer(bookReducer,[],()=>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : []
    })
    // const addBook= (title,author)=>{    
    //     setBooks([...books,{title, author,id:uuidv4}])
    // }
    // const removeBook=(id)=>{
    //     setBooks(books.filter(book=>book.id!==id));
    // }

    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
    },[books])
    return ( 
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;