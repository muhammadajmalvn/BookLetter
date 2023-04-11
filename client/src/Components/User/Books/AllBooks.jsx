import { React, useEffect } from 'react';
import Card from '@mui/material/Card';
import { CardActionArea, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mantine/core';
import { userGetBooksAction } from '../../../Redux/Actions/userActions/bookActions'
import Loading from '../../../Pages/Loading'

function AllBooks() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const books = useSelector((state) => state.userGetBooks)
    console.log(books);
    const { booksDataLoading, booksData, booksDataError } = books

    useEffect(() => {
        dispatch(userGetBooksAction())
    }, [])

    return (
        <>
            <Box>
                <div className='d-flex flex-wrap justify-content-center  '>
                    {
                        booksDataLoading ? <Loading /> :
                            booksData ? booksData.map((data, index) => {
                                return (
                                    <Card key={index} sx={{ height: 350, width: 350, m: 3, boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)' }}>
                                        <CardActionArea>
                                            <Typography gutterBottom variant="h6" textAlign='center' >
                                                {data.bikeName}
                                            </Typography>
                                            <CardMedia
                                                component="img"
                                                height="220"
                                                width="140"
                                                image={data.photo[0]}
                                                alt={data.title}
                                                onClick={(e) => navigate(`/single-book-view`, { state: { data, title: data.title } })}
                                            />
                                            <CardContent>

                                                <Typography variant="h7" color="text.secondary" fontWeight="bold" textAlign='center'>
                                                    Rent Now @ Price : {data.price} /hr
                                                </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
                                            {/* <Button className='btn-success' bikeName={data.title} /> */}
                                            <Button size="large" onClick={(e) => navigate(`/single-book-view`, { state: { data, title: data.title } })} style={{ color: 'rgb(53, 91, 62)' }}>View Details</Button>
                                            <Button size="large" style={{ color: 'rgb(53, 91, 62)' }}>Book Now</Button>

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