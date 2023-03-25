import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Sidebar from '../sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsFetch } from '../../../Redux/Actions/adminActions/adminUserActions'
import { Box, styled } from '@mui/material'
import { Container } from '@mantine/core';
import { Button } from "primereact/button";

const UserManage = () => {
    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.adminControl)
    const { loading, adminUserData, error } = userDetails
    console.log(userDetails, 'detailssssssss');
    console.log(adminUserData, 'detailssssssss');

    useEffect(() => {
        dispatch(userDetailsFetch())
    }, [])

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

            <Box sx={{ display: 'flex', marginLeft: '15%', marginTop: '5%' }}>

                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, mr: 1 }}>
                    {/* <DrawerHeader /> */}

                    <Container fixed sx={{ mt: 1 }} style={{ maxWidth: '100rem' }}>

                        <DataTable showGridlines value={adminUserData} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}  tableStyle={{ minWidth: '100%' }}>
                            <Column field="firstName" header="First Name" style={{ width: '25%' }}></Column>
                            <Column field="lastName" header="Last Name" style={{ width: '25%' }}></Column>
                            <Column field="email" header="E-mail" style={{ width: '25%' }}></Column>
                            <Column field="phone" header="Mobile" style={{ width: '25%' }}></Column>
                        </DataTable>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default UserManage





