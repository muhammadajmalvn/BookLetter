import React, { useState } from 'react'
import NavBar from '../Navbar/Navbar'
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom';
import moment from "moment"
import { useEffect } from 'react';
import { DatePicker } from "antd"
import StripePayButton from '../../../Components/User/Buttons/StripePayButton';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const { RangePicker } = DatePicker

export const Booking = () => {

  const location = useLocation();
  const { booksData } = location.state;
  const clickedBook = booksData?.find((book) => book._id === location.state.bookId)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [totalDays, setTotalDays] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    postcode: "",
    state: "",
    phoneNumber: ""
  });


  const bookingData = {
    userId: JSON.parse(localStorage.getItem("user-login")).id,
    userName: JSON.parse(localStorage.getItem("user-login")).firstName,
    bookId: clickedBook._id,
    bookData: clickedBook,
    totalAmount,
    totalDays,
    address,
    bookedTimePeriod: {
      startDate,
      endDate
    },
  }




  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }));
  };
  const isFieldsFilled = Object.values(address).every((field) => field !== "");

  const selectDaySlots = (values) => {
    setStartDate(values[0].format('DD MM YYYY'))
    setEndDate(values[1].format('DD MM YYYY'))
    setTotalDays(values[1].diff(values[0], 'days'))
  }

  const disabledDate = (current) => {
    // Disable dates on or after 3 days from today
    return current && current <= moment().add(3, "days").endOf("day");
  };

  useEffect(() => {
    setTotalAmount(totalDays * clickedBook?.price)
  }, [totalDays])

  return (
    <>
      <NavBar />
      <br />
      <Container maxWidth="lg" >
        <Container maxWidth="md" sx={{ display: 'flex', gap: 2 }}>
          <Box maxWidth="md" sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
            <img src={clickedBook ? clickedBook.photo[0] : ''}
              height={300}
              width={300}
              alt='d' />
          </Box>
          <Box maxWidth="md" sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', width: "600px" }}>
            {/* <Typography variant="h4" sx={{ textAlign: 'center', my: 1 }}>Book Details</Typography> */}
            <Container maxWidth="md" >
              <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 'bold' }}>Book Title: {clickedBook?.title}</Typography>
              <Typography variant="body1" sx={{ fontSize: 16, my: 1 }}>Author: {clickedBook?.author}</Typography>
              <Typography variant="body1" sx={{ fontSize: 16, my: 1 }}>Description: {clickedBook?.description}.</Typography>
              <Typography variant="body1" sx={{ fontSize: 16, my: 1 }}>Rent Per Day: Rs {clickedBook?.price}</Typography>
              <Typography variant="body1" sx={{ fontSize: 16, my: 1 }}>Genre: {clickedBook?.genre}</Typography>
            </Container>
          </Box>
        </Container>

        <Container maxWidth="md">
          <Container>
            <Typography variant="h6" sx={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', my: 2 }}>Book your copy with us now</Typography>
          </Container>
          <Container maxWidth="md">

            <Box sx={{ height: "50px", mt: 3 }}>
              <Typography>
                Select Date Range
              </Typography>
              <RangePicker
                showTime={{ format: "MM DD YYYY" }}
                format="MM DD YYYY"
                style={{ width: "100%", height: "100%" }}
                onChange={selectDaySlots}
                disabledDate={disabledDate}
              />
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <FormControl fullWidth sx={{ mt: 3 }}>
                <div className="col-md-12">
                  <label className="labels">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 1"
                    name="addressLine1"
                    value={address.addressLine1}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    name="addressLine2"
                    value={address.addressLine2}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter the pincode"
                    name="postcode"
                    value={address.postcode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter the state"
                    name="state"
                    value={address.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Phone number</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="enter phone number"
                    name="phoneNumber"
                    value={address.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', mt: 3 }}>
              <Typography variant="h6">Rent per Day : {clickedBook?.price}/day</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', mt: 3 }}>
              <Typography variant="h6">Total Day :{totalDays} days</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2 }}>
              <Typography variant='h6'>Total Amount : Rs {totalAmount} </Typography>
            </Box>
            <StripePayButton bookingData={bookingData} />
            <br /><br />
          </Container>
        </Container>
      </Container>
    </>
  )
}
