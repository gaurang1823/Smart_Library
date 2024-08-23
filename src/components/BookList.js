import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContexts';
import BookDetails from './BookDetails';
const BookList = () => {
   const {books}= useContext(BookContext);
    return books.length? ( 
        <div className='books-list'>
           <ul>
                {books.map((book)=>{
                    return(
                        <BookDetails book={book} key={book.id}/>
                    )
                })}
            </ul> 
        </div>
     ): (
        <div className="empty"> No books to Read  </div>
     );
}
 
export default BookList;