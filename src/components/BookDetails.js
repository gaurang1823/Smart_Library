import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContexts';

const BookDetails = ({book}) => {
  //  const {removeBook} = useContext(BookContext);
  const {dispatch} = useContext(BookContext);
    return ( 
        <li onClick={()=> dispatch({type:'REMOVE_BOOK',id:book.id})}>
            <div className='title'> {book.title}</div>
            <div className='author'> {book.author}</div>
        </li>
     );
}
 
export default BookDetails;