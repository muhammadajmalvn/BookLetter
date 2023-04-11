import React from 'react'
import Navbar from '../../../Pages/User/Navbar/Navbar'
import Banner from '../../../Components/User/Banner';
import Poster from '../../../Components/User/Poster';
import orderImg from '../../../public/enquire-n-Order-details-jpg'
import bannerImg from '../../../public/bannar.jpg'


const HomePage = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh' }}>
        <div style={{ backgroundColor: '#fff' }}>
          {/* Banner */}
          <div style={{ height: 650 }}>
            <Banner image={bannerImg} />
          </div>

          {/* First poster */}
          <div style={{ height: 400 }}>
            <Poster title={'Rent Book with us at easy steps:'} image={orderImg} />
          </div>

          {/* Second poster */}
          <div style={{ height: 400 }}>
            <Poster title={'Sell Book with us at easy steps:'} image={orderImg} />
          </div>
        </div>

        {/* First row of cards */}
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 0' }}>
          {/* Card 1 */}
          <div style={{ width: '30%', backgroundColor: '#fff', padding: 20 }}>
            <h2>Card 1</h2>
            <p>Some text</p>
          </div>

          {/* Card 2 */}
          <div style={{ width: '30%', backgroundColor: '#fff', padding: 20 }}>
            <h2>Card 2</h2>
            <p>Some text</p>
          </div>

          {/* Card 3 */}
          <div style={{ width: '30%', backgroundColor: '#fff', padding: 20 }}>
            <h2>Card 3</h2>
            <p>Some text</p>
          </div>
        </div>

        {/* Second row of cards */}
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 0' }}>
          {/* Card 4 */}
          <div style={{ width: '30%', backgroundColor: '#fff', padding: 20 }}>
            <h2>Card 4</h2>
            <p>Some text</p>
          </div>

          {/* Card 5 */}
          <div style={{ width: '30%', backgroundColor: '#fff', padding: 20 }}>
            <h2>Card 5</h2>
            <p>Some text</p>
          </div>

          {/* Card 6 */}
          <div style={{ width: '30%', backgroundColor: '#fff', padding: 20 }}>
            <h2>Card 6</h2>
            <p>Some text</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
