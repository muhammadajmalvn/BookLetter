import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Button } from 'primereact/button';
// import { Rating } from 'primereact/rating';
// import { Tag } from 'primereact/tag';
// import { Box, styled } from '@mui/material'
// import { Container } from '@mantine/core';
import Sidebar from '../../Sidebar/Sidebar'
import { adminGetAllBookAction, adminDeleteBookAction } from '../../../../Redux/Actions/adminActions/adminBookActions';
import './Books.css'

const Books = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const books = useSelector((state) => state.adminGetAllBooks)
  const { loading, adminBookData, error } = books
  console.log(books, 'datassssssssssss');
  console.log(adminBookData, 'bookdata');
  useEffect(() => {
    dispatch(adminGetAllBookAction())
  }, [])

  const handleDeleteBook = async (id) => {
    swal({
      title: "Are you sure?",
      text: "The selected book will deleted!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          // Call the deleteUser function here if the user confirms the deletion
          dispatch(adminDeleteBookAction(id));
          swal("Book deleted successfully!", {
            icon: "success",
          });
        } else {
          swal("User deletion cancelled!");
        }
      });
  }

  return (
    <>
      <Box sx={{ display: 'flex', marginLeft: '6%', marginTop: '6%',zIndex:'-10' }}>

        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mr: 1 }}>

          <div className="table-responsive">

            <Table bordered hover striped="columns" variant="dark">
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
                  adminBookData ? adminBookData.data.map((book, index) => {
                    return (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{book.title}</td>
                          <td>{book.author}</td>
                          <td>{book.genre}</td>
                          <td>{book.copies[0]._id}</td>
                          <td>{book.publisher}</td>
                          <td>{book.price}</td>
                          <td><Button className='btn btn-dark' onClick={(e) => { navigate('/admin/edit-book', { state: { adminBookData: book } }) }}><i class="fa-sharp fa-solid fa-pen" style={{ color: 'cyan', fontSize: '150%' }}></i></Button>

                            <Button className='btn btn-dark' onClick={() => handleDeleteBook(book._id)}><i class="fa-sharp fa-solid fa-trash" style={{ color: 'red', fontSize: '150%' }}></i></Button> </td>
                        </tr>
                      </>
                    )
                  }) : ''
                }
              </tbody>
            </Table>
          </div>
        </Box>
      </Box>
    </>




    // <Box sx={{ display: 'flex' }}>

    //   <Sidebar />
    //   <Box component="main" sx={{ flexGrow: 1, p: 3, mr: 1 }}>

    //     <Container fixed sx={{ mt: 1 }} style={{ maxWidth: '100rem' }}>

    //       {/* <div className="card"> */}
    //       <DataTable value={adminBookData} tableStyle={{ minWidth: '60rem' }} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} resizableColumns showGridlines>
    //         <Column field="bikeName" header="Name" sortable ></Column>
    //         <Column field="photo" header="Photo" body={(rowData) => <img src={rowData.photo[0]} alt="User" style={{
    //           width: '5rem',
    //           height: '5rem',
    //           boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    //           borderRadius: '30%',
    //         }} />} />
    //         <Column field="title" header="Model" sortable></Column>
    //         <Column field="author" header="Brand" sortable></Column>
    //         <Column field="genre" header="Color" sortable></Column>
    //         <Column field="copies[0]._id" header="engineNumber" sortable ></Column>
    //         <Column field='publisher' header="fuel" sortable></Column>
    //         <Column field='price' header="price" sortable></Column>
    //         <Column header="Action" body={(rowData) => (
    //           <div>
    //             <i className="pi pi-file-edit" style={{ fontSize: '1.5rem', marginRight: '5px', color: 'blue' }}
    //               onClick={(e) => {
    //                 navigate('/admin/edit-book', { state: { adminBookData: rowData } })
    //               }} ></i>
    //             <i className="pi pi-times" style={{ fontSize: '1.5rem', marginRight: '5px', color: 'red' }}
    //               onClick={() => handleDeleteBook(rowData._id)}></i>
    //           </div>
    //         )} />

    //       </DataTable>
    //     </Container>
    //   </Box>
    // </Box>
  )
}

export default Books






