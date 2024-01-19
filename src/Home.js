import React from 'react';
import './Home.css';
import Img2 from './image/Img 2.jpg';
import Img3 from './image/Img3.jpg';
import Img4 from './image/Img4.jpg';
import Img5 from './image/Img5.jpg';
import Img6 from './image/Img6.jpg';
import Img7 from './image/Img7.jpg';
import Img8 from './image/Img8.jpg';
import Img9 from './image/Img9.jpg';
import Img10 from './image/cover.jpg';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src={Img2} alt='' />
        <div className='home_row'>
          <Product
            id='1'
            title=' Redmi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV L32R8-FVIN
          (Black)'
            price='11999'
            image={Img3}
            rating={3}
          />
          <Product
            id='2'
            title='Samsung 80 cm (32 inches) HD Ready Smart LED TV UA32T4380AKXXL (Glossy Black)'
            price='12635'
            image={Img9}
            rating={4}
          />
          <Product
            id='3'
            title='iFFALCON 80.04 cm (32 inches) Bezel-Less S Series HD Ready Smart Android LED TV iFF32S53 (Black)Redmi 80 cm (32 inches) '
            price='8490'
            image={Img4}
            rating={4}
          />
        </div>
        <div className='home_row'>
          <Product
            id='4'
            title='Acer 80 cm (32 inches) Advanced I Series HD Ready Smart LED Google TV AR32GR2841HDFL (Black) '
            price='11550'
            image={Img5}
            rating={4}
          />
          <Product
            id='5'
            title='MI 80 Cm (32 Inches) A Series Hd Ready Smart Google LED Tv L32M8-5Ain (Black)'
            price='11490'
            image={Img6}
            rating={3}
          />
          <Product
            id='6'
            title='Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)'
            price='12790'
            image={Img7}
            rating={4}
          />
        </div>
        <div className='home_row'>
          <Product
            id='7'
            title='LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray)'
            price='10654'
            image={Img8}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
