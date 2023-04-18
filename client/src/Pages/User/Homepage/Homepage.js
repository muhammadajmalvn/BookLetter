import React from 'react'
import Navbar from '../../../Pages/User/Navbar/Navbar'
import Banner from '../../../Components/User/Banner';
import Poster from '../../../Components/User/Poster';
import orderImg from '../../../public/enquire-n-Order-details-jpg'
import bannerImg from '../../../public/bannar.jpg'
import Footer from '../Footer/Footer';


const HomePage = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#f2f2f2' }}>
        <div style={{ backgroundColor: '#fff' }}>
          {/* Banner */}
          <div style={{ height: 650 }}>
            <Banner image={bannerImg} />
          </div>

          {/* First poster */}
          <div style={{ height: 'auto' }}>
            <Poster title={'Rent Book with us at easy steps:'} image={orderImg} />
          </div>

          {/* Second poster */}
          <div style={{ height: 'auto' }}>
            <Poster title={'Sell Book with us at easy steps:'} image={orderImg} />
          </div>
        </div>

        {/* <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 0' }}>
          <div style={{ width: '30%', backgroundColor: '#fff', padding: 20 }}>
            <h2>Card 1</h2>
            <p>Some text</p>
          </div>

          <div style={{ width: '30%', backgroundColor: '#fff', padding: 20 }}>
            <h2>Card 2</h2>
            <p>Some text</p>
          </div>

          <div style={{ width: '30%', backgroundColor: '#fff', padding: 20 }}>
            <h2>Card 3</h2>
            <p>Some text</p>
          </div>
        </div> */}

        {/* <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 0' }}>
          <div style={{ width: '30%', backgroundColor: '#fff', padding: 20 }}>
            <h2>Card 4</h2>
            <p>Some text</p>
          </div>

          <div style={{ width: '30%', backgroundColor: '#fff', padding: 20 }}>
            <h2>Card 5</h2>
            <p>Some text</p>
          </div>

          <div style={{ width: '30%', backgroundColor: '#fff', padding: 20 }}>
            <h2>Card 6</h2>
            <p>Some text</p>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
