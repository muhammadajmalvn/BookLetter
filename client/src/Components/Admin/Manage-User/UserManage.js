import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsFetch, userBlock, deleteUser } from '../../../Redux/Actions/adminActions/adminUserActions'
import { Box } from '@mui/material'
import './UserManage.css'
import Switch from '@mui/material/Switch';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';


const UserManage = () => {
    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.adminControl)
    const { loading, adminUserData, error } = userDetails
    console.log(userDetails, 'detailssssssss');
    console.log(adminUserData, 'detailssssssss');

    const handleBlockUser = async (id) => {
        console.log(id);
        dispatch(userBlock(id));
        dispatch(userDetailsFetch());
    }

    const [blockedUsers, setBlockedUsers] = useState([]);


    useEffect(() => {
        dispatch(userDetailsFetch());
    }, [dispatch]);




    const handleToggle = (id) => {
        const updatedUsers = [...blockedUsers];
        const userIndex = updatedUsers.findIndex(user => user === id);

        if (userIndex >= 0) {
            updatedUsers.splice(userIndex, 1);
        } else {
            updatedUsers.push(id);
        }

        setBlockedUsers(updatedUsers);
        dispatch(userBlock(id));
    }


    const handleDeleteUser = async (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this user!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // Call the deleteUser function here if the user confirms the deletion
                    dispatch(deleteUser(id));
                    dispatch(userDetailsFetch());
                    swal("User deleted successfully!", {
                        icon: "success",
                    });
                } else {
                    swal("User deletion cancelled!");
                }
            });
    }



    return (
        <>



            <Box sx={{ display: 'flex', marginLeft: '6%', marginTop: '6%' }}>

                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, mr: 1 }}>

                    {/* <Container fixed sx={{ mt: 1 }} style={{ maxWidth: '100%' }}>
                        <DataTable value={adminUserData} stripedRows tableStyle={{ minWidth: '50rem' }}>
                            <Column field="firstName" header="First Name" style={{ width: '15%' }}></Column>
                            <Column field="lastName" header="Last Name" style={{ width: '15%' }}></Column>
                            <Column field="email" header="E-mail" style={{ width: '35%' }}></Column>
                            <Column field="phone" header="Mobile" style={{ width: '20%' }}></Column>
                            <Column header="Status" style={{ width: '10%' }}
                                body={(rowData) => (
                                    <>

                                        <Switch
                                            checked={rowData.status}
                                            onChange={() => handleBlockUser(rowData._id)}
                                            name="blockUser"
                                            inputProps={{ 'aria-label': 'Block User Switch' }}
                                            className={rowData.status ? "block-switch" : "unblock-switch"}
                                        />


                                    </>
                                )}
                            />
                            <Column header="Action"><Button style={{ color: 'red' }}><i class="fa-sharp fa-solid fa-trash"></i></Button> </Column>
                        </DataTable>
                    </Container> */}


                    <Table bordered hover striped="columns" variant="dark" responsive>
                        <thead >
                            <tr>
                                <th>Sl.No</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                adminUserData ? adminUserData.data.map((user, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td >{user.firstName}</td>
                                                <td>{user.lastName}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td> <Switch
                                                    checked={user.status}
                                                    onChange={() => handleBlockUser(user._id)}
                                                    name="blockUser"
                                                    inputProps={{ 'aria-label': 'Block User Switch' }}
                                                    className={user.status ? "block-switch" : "unblock-switch"}
                                                /></td>
                                                <td><Button className='btn btn-dark' onClick={() => handleDeleteUser(user._id)}><i class="fa-sharp fa-solid fa-trash" style={{ color: 'red', fontSize: '150%' }}></i></Button> </td>
                                            </tr>
                                        </>
                                    )
                                }) : ''
                            }




                        </tbody>
                    </Table>
                </Box>
            </Box>




        </>
    )
}

export default UserManage





