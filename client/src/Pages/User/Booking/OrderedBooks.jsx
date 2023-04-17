import React, { useEffect } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import NavBar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderedBooksAction } from '../../../Redux/Actions/userActions/orderActions';

const OrderedBooks = () => {
    const dispatch = useDispatch()
    const userId = JSON.parse(localStorage.getItem("user-login")).id
    const orderedBikes = useSelector((state) => state.getorderedBooks)
    console.log(orderedBikes,'orderssssssssssssssss');

    useEffect(() => {
        dispatch(getOrderedBooksAction(userId))
    }, [])

    return (
        <>
            <NavBar />
            <section className="h-100 h-custom" style={{ backgroundColor: "" }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol lg="8" xl="6">
                            {/* <p className="lead fw-bold mb-5" style={{ color: "#f37a27" }}>
                               Your Orders
                            </p> */}

                            <MDBCard className="border-top border-bottom border-3 border-color-custom">
                                <MDBCardBody className="p-5">


                                    <MDBRow>
                                        <MDBCol className="mb-3">
                                            <p className="small text-muted mb-1">Date</p>
                                            <p>10 April 2021</p>
                                        </MDBCol>
                                        <MDBCol className="mb-3">
                                            <p className="small text-muted mb-1">Order No.</p>
                                            <p>012j1gvs356c</p>
                                        </MDBCol>
                                    </MDBRow>

                                    <div
                                        className="mx-n5 px-5 py-4"
                                        style={{ backgroundColor: "#f2f2f2" }}
                                    >
                                        <MDBRow>
                                            <MDBCol md="8" lg="9">
                                                <p>BEATS Solo 3 Wireless Headphones</p>
                                            </MDBCol>
                                            <MDBCol md="4" lg="3">
                                                <p>£299.99</p>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol md="8" lg="9">
                                                <p className="mb-0">Shipping</p>
                                            </MDBCol>
                                            <MDBCol md="4" lg="3">
                                                <p className="mb-0">£33.00</p>
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                    <MDBRow className="my-4">
                                        <MDBCol md="4" className="offset-md-8 col-lg-3 offset-lg-9">
                                            <p
                                                className="lead fw-bold mb-0"
                                                style={{ color: "#f37a27" }}
                                            >
                                                £262.99
                                            </p>
                                        </MDBCol>
                                    </MDBRow>

                                    <p
                                        className="lead fw-bold mb-4 pb-2"
                                        style={{ color: "#f37a27" }}
                                    >
                                        Tracking Order
                                    </p>

                                    <MDBRow>
                                        <MDBCol lg="12">
                                            <div className="horizontal-timeline">
                                                <ul className="list-inline items d-flex justify-content-between">
                                                    <li className="list-inline-item items-list">
                                                        <p
                                                            className="py-1 px-2 rounded text-white"
                                                            style={{ backgroundColor: "#f37a27" }}
                                                        >
                                                            Ordered
                                                        </p>
                                                    </li>
                                                    <li className="list-inline-item items-list">
                                                        <p
                                                            className="py-1 px-2 rounded text-white"
                                                            style={{ backgroundColor: "#f37a27" }}
                                                        >
                                                            Shipped
                                                        </p>
                                                    </li>
                                                    <li className="list-inline-item items-list">
                                                        <p
                                                            className="py-1 px-2 rounded text-white"
                                                            style={{ backgroundColor: "#f37a27" }}
                                                        >
                                                            On the way
                                                        </p>
                                                    </li>
                                                    <li
                                                        className="list-inline-item items-list text-end"
                                                        style={{ marginRight: "-8px" }}
                                                    >
                                                        <p style={{ marginRight: "-8px" }}>Delivered</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                    <p className="mt-4 pt-2 mb-0">
                                        Want any help?{" "}
                                        <a href="#!" style={{ color: "#f37a27" }}>
                                            Please contact us
                                        </a>
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    )
}

export default OrderedBooks


