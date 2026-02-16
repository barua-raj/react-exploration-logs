import Book from './book';
export default function Library({books}) {
    return(
        <div className='student'>
            <h3>My Library</h3>
            <p>Books Collection: {books.length}</p>
            <p>Address: </p>
            <ul>
                {
                    books.map (book => <Book key={book.id} book = {book}></Book>)
                }
            </ul>
        </div>
    )
}