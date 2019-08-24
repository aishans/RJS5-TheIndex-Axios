import React from "react";

function BookRow(props) {
  const book = props.book;
  const authors = book.authors.map(author => <div>{author.name}</div>);
  return (
    <tr>
      <td>{book.title}</td>
      <td>{authors}</td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  );
}

export default BookRow;
