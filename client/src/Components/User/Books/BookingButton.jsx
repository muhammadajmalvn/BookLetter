import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function BookingButton({ bikeName }) {
  const navigate = useNavigate()
  const books = useSelector((state) => state.userGetBooks)
  const { booksDataLoading, booksData, booksDataError } = books
  return (
    <Button
      label="Book Now" aria-label="Submit" icon="pi pi-shopping-bag" style={{ width: '100%', fontSize: 'large' }}
      onClick={() => navigate("/booking", { state: { booksData,title: title } })}

    >
      Book Now
    </Button>
  )
}

export default BookingButton
