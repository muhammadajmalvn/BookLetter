import React, { useEffect } from 'react'
import {
  MDBFile
} from 'mdb-react-ui-kit';
import { Button } from 'primereact/button';
import './userProfile.css'
import Navbar from '../Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../../Redux/Actions/userActions/LoginActions';

const UserProfile = () => {
  const userData = useSelector((state) => state.userLogin.userLoginDetails)
  const { loading, error, profileData} = userData;
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch()
  }, [])
  
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
                  // profileData?.photo
                  // ? profileData?.photo
                  // : 
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} />
            </div>
            <form>
              <MDBFile size='md' className='mt-4' id='formFileLg' onChange={(e) => setPhoto(e.target.files[0])} />
              <div className="card flex flex-wrap justify-content-center gap-3 col-md-12 mt-3">
                <Button
                  severity="primary"
                  label="Add Photo"
                  icon="pi pi-upload"
                />
              </div>
            </form>
          </div>
          <div className="col-md-9 border-right">
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
                    defaultValue=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue=""
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
                    defaultValue=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 1"
                    defaultValue=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    defaultValue=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    defaultValue=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    defaultValue=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Area</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    defaultValue=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    defaultValue=""
                  />
                </div>

              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="country"
                    defaultValue=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">State/Region</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue=""
                    placeholder="state"
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="button">
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