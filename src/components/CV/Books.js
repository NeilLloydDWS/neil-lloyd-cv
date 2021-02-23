import React from 'react'
import { Card, Row, Col, Divider } from 'antd'

const Books = ({ books }) => (
  <>
    <h3 className="text-center mt-1 mb-0">Recent Reading [Alphabetical]</h3>
    <Card className="books">
      {books.map((book, i) => (
       
          <img
                src={`/books/${book}`}
                alt="Book List Image"
                className="books inline"
                
              />
         
      ))}
    </Card>
  </>
)

export default Books
