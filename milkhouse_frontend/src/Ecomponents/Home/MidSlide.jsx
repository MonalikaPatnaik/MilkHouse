import { Box, styled} from '@mui/material';
import Slide from './Slide';
import React from 'react'

const Component = styled(Box)`
    display: flex;
    justify-content: space-between;
`;

const LeftComponent = styled(Box)`
    width: 83%;
`;

const RightComponent = styled(Box)`
    width: 17%;
    padding: 5px;
    margin-top: 10px;
    background: #FFFFFF;
    margin-left: 10px;
    text-align: center;
`;

const MidSlide = ({ products, title, timer }) => {
    const addUrl = 'https://res.cloudinary.com/dx0dgujbj/image/upload/v1690316219/MilkHouse/BannerData/Banners-05_tou5hj.jpg'
  return (
    <Component>
        <LeftComponent>
           <Slide 
            products={products}
            title={title}
            timer = {timer}
           />
        </LeftComponent>
        <RightComponent>
            <img src={addUrl} alt="add" style={{width: '200px', height: 'auto'}}/>
        </RightComponent>

    </Component>
  )
}

export default MidSlide