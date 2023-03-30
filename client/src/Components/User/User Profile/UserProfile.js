import React, { useEffect, useState } from 'react'
import {
  MDBFile
} from 'mdb-react-ui-kit';
import { Button } from 'primereact/button';
import './userProfile.css'
import Navbar from '../Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../../Redux/Actions/userActions/profileActions'
import Loading from '../../Loading';
import ErrorMessage from '../../Error';

const UserProfile = () => {
  const profileDatas = useSelector((state) => state.userProfile)
  const { loading, error, profileData } = profileDatas;

  const addPhoto = (e) => {
    e.preventDefault();
    const data = new FormData()
    console.log(photo, 'phooooooootttttttttttooooooooooo');
    data.append('file', photo);
    data.append('upload_preset', "LetterBox");
    data.append('cloudname', 'driuxmoax')
    console.log(data, 'dataaaaaaaaaaaaa');
    if (photo.type !== 'image/jpeg' && photo.type !== 'image/png') {
      setImgTypeError('Not supported')
    } else {
      setImgTypeError('')
      fetch("https://api.cloudinary.com/v1_1/driuxmoax/image/upload", {
        method: "post",
        body: "data"
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch(userImageAction(data.url))
        })
    }
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserProfile())
  }, [])


  const [photo, setPhoto] = useState("");

  return (
    <>
      <Navbar />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src={
                  profileData?.data.photo} />
            </div>
            <form>
              <MDBFile size='md' className='mt-4' id='formFileLg' onChange={(e) => setPhoto(e.target.files[0])} />
              <div className="card flex flex-wrap justify-content-center gap-3 col-md-12 mt-3" >
                <Button
                  className='btn'
                  severity="primary "
                  label="Add Photo"
                  icon="pi pi-upload"
                  onClick={addPhoto} style={{ backgroundColor: '#355B3E', color: 'white' }}
                />
              </div>
            </form>
          </div>
          <div className="col-md-9 border-right">
            {error ? <ErrorMessage variant='danger'>{error}</ErrorMessage> : " "}
            {loading ? <Loading /> : ""}
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    defaultValue={profileData?.data.firstName}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={profileData?.data.lastName}
                    placeholder="surname"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    defaultValue={profileData?.data.phone}
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 1"
                    defaultValue={profileData?.data.address}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    defaultValue={profileData?.data.address}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    defaultValue={profileData?.data.address}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    defaultValue={profileData?.data.address}
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    defaultValue={profileData?.data.email}
                  />
                </div>

              </div>

              <div className="mt-5 text-center">
                <button className="btn profile-button" type="button" style={{ backgroundColor: '#355B3E', color: 'white' }}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default UserProfile