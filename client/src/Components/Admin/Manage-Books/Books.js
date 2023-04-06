import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import Sidebar from '../sidebar/Sidebar'
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';

const Books = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const books = useSelector((state)=>state)

  useEffect(() => {
    dispatch(adminGetAllBikeAction())
  }, [])


  // const books = [
  //   {
  //     name: "Atomic Book",
  //     Author: "mike",
  //     category: 'motivations',
  //     id: 121,
  //     publication: 'avcc',
  //     price: 25
  //   },
  //   {
  //     name: "Atomic Book2",
  //     Author: "mikerr",
  //     category: 'motivationsrrrr',
  //     id: 123,
  //     publication: 'avccrrrr',
  //     price: 20
  //   }
  // ]
  return (
    <>
      <Box sx={{ display: 'flex', marginLeft: '6%', marginTop: '6%' }}>

        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mr: 1 }}>


          <Table bordered hover striped="columns" variant="dark" responsive>
            <thead >
              <tr>
                <th>Sl.No</th>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Book ID</th>
                <th>Publisher</th>
                <th>Price per Day</th>
                <th>Edit/Delete Book</th>
              </tr>
            </thead>
            <tbody>
              {
                books.map((book, index) => {
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{book.name}</td>
                        <td>{book.Author}</td>
                        <td>{book.category}</td>
                        <td>{book.id}</td>
                        <td>{book.publication}</td>
                        <td>{book.price}</td>
                        <td><Button className='btn btn-dark'><i class="fa-sharp fa-solid fa-pen" style={{ color: 'cyan', fontSize: '150%' }}></i></Button> <Button className='btn btn-dark'><i class="fa-sharp fa-solid fa-trash" style={{ color: 'red', fontSize: '150%' }}></i></Button> </td>
                      </tr>
                    </>
                  )
                })
              }
            </tbody>
          </Table>
        </Box>
      </Box>
    </>
  )
}

export default Books







