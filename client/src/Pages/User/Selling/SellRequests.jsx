import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/Navbar'
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBCardImage,
  MDBRow,
} from "mdb-react-ui-kit";
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getsellRequestedBooksAction } from '../../../Redux/Actions/userActions/sellActions';


const SellRequests = () => {
  const dispatch = useDispatch()
  const userId = JSON.parse(localStorage.getItem("user-login")).id

  const Books = useSelector((state) => state.getSellBooks)
  const { loading, sellBooks, error } = Books
  console.log(sellBooks, '88888888888');

  useEffect(() => {
    dispatch(getsellRequestedBooksAction(userId))
  }, [])

  return (
    <>
      <NavBar />
      <section className="h-100 h-custom" style={{ backgroundColor: "" }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>Sell Requests</h1>
        </Box>
        <MDBContainer className="pt-2 pb-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="8" xl="6">

              {sellBooks ? sellBooks.map((book) => {
                return (
                  <MDBCard className="border-top border-bottom border-3 border-color-custom mt-3 ">
                    <MDBCardBody className="p-5">
                      <MDBRow>
                        <MDBCol className="mb-3">
                          <p className="small text-muted mb-1">Date</p>
                          <p>{new Date(book.publishedDate).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </MDBCol>
                        <MDBCol className="mb-3">
                          <p className="small text-muted mb-1">Order No.</p>
                          <p>{book._id}</p>
                        </MDBCol>
                      </MDBRow>
                      <div
                        className="mx-n5 px-5 py-4"
                        style={{ backgroundColor: "#f2f2f2" }}
                      >
                        <MDBRow>
                          <MDBCol md="8" lg="9">
                            <p>{book.title}</p>
                          </MDBCol>
                          <MDBCol md="4" lg="3">
                            <p>Rs {book.askingPrice}</p>
                          </MDBCol>
                        </MDBRow>
                      </div>
                      <p
                        className="lead fw-bold mb-4 pb-2"
                        style={{ color: "#f37a27" }}
                      >
                        Order Status
                      </p>

                      <MDBRow>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>

                )
              }) : ''}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer />
    </>
  )
}

export default SellRequests