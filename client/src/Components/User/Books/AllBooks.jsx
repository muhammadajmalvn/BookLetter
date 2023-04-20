import { React, useEffect } from 'react';
import Card from '@mui/material/Card';
import { CardActionArea, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';
import { userGetBooksAction } from '../../../Redux/Actions/userActions/bookActions'
import Loading from '../../../Pages/Loading'
import Button from './BookingButton'

function AllBooks({ allBooks }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const book = useSelector((state) => state.userGetBooks)
    let { booksDataLoading, booksData, booksDataError } = book


    useEffect(() => {
        dispatch(userGetBooksAction())
    }, [])

    return (
        <>
            <Box>
                <div className='d-flex flex-wrap justify-content-center  '>
                    {
                        booksDataLoading ? <Loading /> :
                            allBooks ? allBooks.data.map((data, index) => {
                                return (
                                    <Card key={index} sx={{ height: 350, width: 350, m: 3, boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)' }}>
                                        <CardActionArea>
                                            <Typography gutterBottom variant="h6" textAlign='center' >
                                                {data.title}
                                            </Typography>
                                            <CardMedia
                                                component="img"
                                                height="180"
                                                width="140"
                                                image={data.photo[0]}
                                                alt={data.title}
                                                onClick={(e) => navigate(`/single-book-view`, { state: { booksData, bookId: data._id } })}
                                            />
                                            <CardContent>

                                                <Typography variant="h7" color="text.secondary" fontWeight="bold" textAlign='center'>
                                                    Rent Now @ Price : {data.price} /day
                                                </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button bookId={data._id} />
                                        </CardActions>
                                    </Card>
                                )
                            }) : ""
                    }
                </div>
            </Box>
        </>
    )
}

export default AllBooks