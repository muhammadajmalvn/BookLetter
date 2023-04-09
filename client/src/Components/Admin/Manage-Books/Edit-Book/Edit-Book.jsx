import React, { useEffect, useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import { MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { Card } from 'primereact/card';
import { Box, Avatar, Grid } from '@mui/material';
import { useForm } from 'react-hook-form'
import Loading from '../../../Loading';
import { useDispatch, useSelector } from 'react-redux';
import { adminGetLocation } from '../../../../Redux/Actions/adminActions/adminBookActions';
import { adminEditBookAPI } from '../../../../APIs/adminAPI';
import { useNavigate, useLocation } from 'react-router-dom';

const EditBook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [publisher, setPublisher] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [pages, setPages] = useState('')
    const [images, setImages] = useState([])
    const [images1, setImages1] = useState([])


    const [loading, setLoading] = useState(false)
    const [sucess, setSuccess] = useState(false)

    useEffect(() => {
        dispatch(adminGetLocation())

        setImages1([location.state.adminBookData.photo])
        setTitle(location.state.adminBookData.title)
        setAuthor(location.state.adminBookData.author)
        setGenre(location.state.adminBookData.genre)
        setDescription(location.state.adminBookData.description)
        setPages(location.state.adminBookData.pages)
        setPrice(location.state.adminBookData.price)
        setPublisher(location.state.adminBookData.publisher)
        setDate(location.state.adminBookData.publishedDate)
    }, [])

    const locationData = useSelector((state) => state.adminGetLocation.location)

    const onSubmit = async () => {

        setLoading(true)


        const formdata = new FormData()

        images.forEach((img) => {
            console.log(img)
            formdata.append("images", img)
        })

        formdata.append("imageUrl", images1)
        const bookData = {
            title,
            author,
            genre,
            publisher,
            price,
            pages,
            date,
            description
        };

        for (const key in bookData) {
            formdata.append(key, bookData[key]);
        }


        const id = location.state.adminBookData._id
        adminEditBookAPI(id, formdata).then((data) => {
            console.log(data.data, 'form data response');

            // dispatch(addBook(data.data))
            // setLoading(false)

            // setSuccess(true)

            // setTimeout(() => {
            //     navigate("/admin/books", { state: { bookAdded: true } })
            //     setSuccess(false)
            // }, 3000)
        })
            .catch((error) => {
                console.log("some error", error);
                // setLoading(false)
            })
    }
    // const jsDate = new Date(location.state.adminBookData.publishedDate);
    // // convert the Date object to the desired date string format
    // const dateString = jsDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/-/g, '/');
    const mongoDate = location.state.adminBookData.publishedDate;
    const dateObject = new Date(mongoDate);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    return (
        <>
            <Sidebar />
            <Box component='main' sx={{ flexGrow: 1, p: 3, marginTop: 10, }}>
                <div className="col-2">

                </div>
                <Card className='col-8 mx-auto'>

                    <div className="card flex flex-column md:flex-row gap-3">

                        <h1 className='text-center mt-2'>Edit Book</h1>
                        {loading ? (
                            <div className="loading-container text-center">
                                <Loading />
                            </div>
                        ) : null}
                        <form id='addBookForm' onSubmit={handleSubmit(onSubmit)}>
                            <MDBRow className='pt-2 ms-3 me-3 mb-4'>
                                <MDBCol>
                                    <p style={{ color: 'red', margin: '0' }}>{errors.title && "Enter a valid book title"}
                                    </p>
                                    {/* <label htmlFor="">Title</label> */}
                                    <MDBInput id='form3Example1' label='Title of Book' defaultValue={location.state.adminBookData.title} type='text' {...register("title", { required: true })} onChange={(e) => setTitle(e.target.value)} />
                                </MDBCol>
                                <MDBCol>
                                    <p style={{ color: 'red', margin: '0' }}>{errors.author && "Enter a valid Author Name"}
                                    </p>
                                    {/* <label htmlFor="">Author</label> */}
                                    <MDBInput id='form3Example2' label='Author of Book' defaultValue={location.state.adminBookData.author} type='text' {...register("author", { required: true })} onChange={(e) => setAuthor(e.target.value)} />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className='pt-2 ms-3 me-3 mb-4'>
                                <MDBCol>
                                    <p style={{ color: 'red', margin: '0' }}>{errors.genre && "Enter a valid Genre"}
                                    </p>
                                    {/* <label htmlFor="">Genre</label> */}
                                    <MDBInput id='form3Example1' label='Genre of Book' defaultValue={location.state.adminBookData.genre} type='text' {...register("genre", { required: true })} onChange={(e) => setGenre(e.target.value)} />
                                </MDBCol>
                                <MDBCol>
                                    {/* <label htmlFor="">Publisher</label> */}
                                    <p style={{ color: 'red', margin: '0' }}>{errors.publisher && "Enter a valid publisher name"}
                                    </p>
                                    <MDBInput id='form3Example2' label='Publisher of Book' defaultValue={location.state.adminBookData.publisher} type='text' {...register("publisher", { required: true })} onChange={(e) => setPublisher(e.target.value)} />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className='pt-2 ms-3 me-3 mb-4'>
                                <MDBCol>
                                    {/* <label htmlFor="">Price</label> */}
                                    <p style={{ color: 'red', margin: '0' }}>{errors.price && "Enter a valid price"}
                                    </p>
                                    <MDBInput id='form3Example1' type='number' label='Price of Book' defaultValue={location.state.adminBookData.price} {...register("price", { required: true, min: 1 })} onChange={(e) => setPrice(e.target.value)} />
                                </MDBCol>
                                <MDBCol>
                                    <p style={{ color: 'red', margin: '0' }}>{errors.pages && "Enter a valid pages"}
                                    </p>
                                    {/* <label htmlFor="">Pages</label> */}
                                    <MDBInput id='form3Example2' type='number' label='Pages of Book' defaultValue={location.state.adminBookData.pages} {...register("pages", { required: true, min: 1 })} onChange={(e) => setPages(e.target.value)} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='pt-2 ms-4 me-4 mb-4'>
                                {/* <label htmlFor="">Description</label> */}
                                <p style={{ color: 'red', margin: '0' }}>{errors.description && "Enter a valid description"}
                                </p>
                                <MDBInput id='form3Example2' type='text' label='Description of Book' defaultValue={location.state.adminBookData.description} {...register("description", { required: true })} onChange={(e) => setDescription(e.target.value)} />
                            </MDBRow>

                            <MDBRow className='pt-2 ms-4 me-4 mb-4'>

                                <MDBInput id='form3Example2' type='date' label='Published Date' defaultValue={dateString}   {...register("date", { required: true })} onChange={(e) => setDate(e.target.value)} value={dateString} />
                            </MDBRow>

                            <MDBRow className='pt-2 ms-3 me-3 mb-4'>
                                <MDBCol>
                                    <label htmlFor="">Image1</label>
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <Avatar variant="square" sx={{ width: 300, height: 150 }}>
                                                <img src={location.state.adminBookData.photo[0]} alt="" />
                                            </Avatar>
                                        </Box>
                                        <TextField
                                            type="file"
                                            inputProps={{
                                                accept: ".jpg, .jpeg, .png",
                                            }}

                                            name='image1'
                                            onChange={(e) => setImages([...images, e.target.files[0]])}
                                        />
                                    </Grid>
                                </MDBCol>


                                <MDBCol>
                                    <label htmlFor="">Image2</label>

                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <Avatar variant="square" sx={{ width: 300, height: 150 }}>
                                                <img src={location.state.adminBookData.photo[1]} alt="" />
                                            </Avatar>
                                        </Box>
                                        <TextField
                                            type="file"
                                            inputProps={{
                                                accept: ".jpg, .jpeg, .png",
                                            }}

                                            name='image2'
                                            onChange={(e) => setImages([...images, e.target.files[0]])}
                                        />
                                    </Grid>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className='pt-2 ms-3 me-3 mb-4'>
                                <MDBCol>
                                    <label htmlFor="">Image3</label>

                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <Avatar variant="square" sx={{ width: 300, height: 150 }}>
                                                <img src={location.state.adminBookData.photo[2]} alt="" />
                                            </Avatar>
                                        </Box>
                                        <TextField
                                            type="file"
                                            inputProps={{
                                                accept: ".jpg, .jpeg, .png",
                                            }}

                                            name='image3'
                                            onChange={(e) => setImages([...images, e.target.files[0]])}
                                        />
                                    </Grid>
                                </MDBCol>
                                <MDBCol>
                                    <label htmlFor="">Image4</label>
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <Avatar variant="square" sx={{ width: 300, height: 150 }}>
                                                <img src={location.state.adminBookData.photo[3]} alt="" />
                                            </Avatar>
                                        </Box>
                                        <TextField
                                            type="file"
                                            inputProps={{
                                                accept: ".jpg, .jpeg, .png",
                                            }}

                                            name='image4'
                                            onChange={(e) => setImages([...images, e.target.files[0]])}
                                        />
                                    </Grid>
                                </MDBCol>
                            </MDBRow>
                            <MDBContainer>
                                <Button type='submit' className='mb-4 container sm-3 mx-auto' style={{ backgroundColor: 'rgb(53, 91, 62)' }}>EDIT</Button>
                            </MDBContainer>
                        </form>
                    </div>
                </Card>
                <div className="col-2"></div>
            </Box>

        </>
    )
}

export default EditBook