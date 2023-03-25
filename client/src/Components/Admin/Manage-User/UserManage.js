import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Sidebar from '../sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsFetch, userBlock } from '../../../Redux/Actions/adminActions/adminUserActions'
import { Box, styled } from '@mui/material'
import { Container } from '@mantine/core';
import { Button } from "primereact/button";
import './UserManage.css'

const UserManage = () => {
    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.adminControl)
    const { loading, adminUserData, error } = userDetails
    console.log(userDetails, 'detailssssssss');
    console.log(adminUserData, 'detailssssssss');

    const handleBlockUser = async (id) => {
        console.log(id);
        await dispatch(userBlock(id));
        dispatch(userDetailsFetch());
    }


    useEffect(() => {
        dispatch(userDetailsFetch());
    }, [dispatch]);

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));
    return (
        <>

            <Box sx={{ display: 'flex', marginLeft: '6%', marginTop: '6%' }}>

                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, mr: 1 }}>
                    {/* <DrawerHeader /> */}

                    <Container fixed sx={{ mt: 1 }} style={{ maxWidth: '100%' }}>

                        <DataTable showGridlines value={adminUserData} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '100%' }}>
                            <Column field="firstName" header="First Name" style={{ width: '25%' }}></Column>
                            <Column field="lastName" header="Last Name" style={{ width: '25%' }}></Column>
                            <Column field="email" header="E-mail" style={{ width: '25%' }}></Column>
                            <Column field="phone" header="Mobile" style={{ width: '25%' }}></Column>
                            <Column
                                body={(rowData) => (
                                    <>
                                        {/* {rowData.status ? (
                                            <Button label="Block" severity="danger" outlined className="my-button" onClick={() => handleBlockUser(rowData._id)} />
                                        ) : (
                                            <Button label="Unblock" severity="success" outlined className="my-button" onClick={() => handleBlockUser(rowData._id)} />
                                        )} */}
                                        <Button
                                            label={rowData.status ? "Block" : "Unblock"}
                                            className={rowData.status ? "my-button block" : "my-button unblock"}
                                            onClick={() => handleBlockUser(rowData._id)}
                                            outlined
                                            severity={rowData.status ? "danger" : "success"}
                                        />

                                    </>
                                )}
                            />
                        </DataTable>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default UserManage





