import React, { useEffect, useState } from 'react'
import NavBar from '../Navbar/Navbar'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import AllBooks from '../../../Components/User/Books/AllBooks'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { userGetBooksAction } from '../../../Redux/Actions/userActions/bookActions'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const BooksView = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const books = useSelector((state) => state.userGetBooks)
  const { booksDataLoading, booksData, booksDataError } = books

  useEffect(() => {
    dispatch(userGetBooksAction())
  }, [])

  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(userBikeSearchAction(searchTerm))
  }

  const category = ['Kids', 'Novel', 'India']
  return (
    <>
      <NavBar />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <h1>Books for you</h1>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <Box component='form' onSubmit={handleSubmit}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80%' }}

        >

          <TextField
            label="Search"
            name='search'
            value={searchTerm}
            fullWidth

            onChange={(e) => setSearchTerm(e.target.value)}

            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start" style={{ cursor: 'pointer' }} onClick={handleSubmit}>
                  <ImageSearchIcon />
                </InputAdornment>
              ),
            }}
            helperText='enter the text here..'
          />
        </Box>
      </Box>


      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs aria-label="basic tabs example" value={value} onChange={handleChange} centered>
            {/* <Tab label="All Books" /> */}
            <Tabs aria-label="basic tabs example" value={value} onChange={handleChange} centered>
              {category.map((data, index) => (
                <Tab key={index} label={data} />
              ))}
            </Tabs>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AllBooks />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* <PriceAscSortBikes priceAsc={bikesData} /> */}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* <PriceDescSortBikes priceDesc={bikesData} /> */}
        </TabPanel>
      </Box>
    </>
  )
}
export default BooksView


