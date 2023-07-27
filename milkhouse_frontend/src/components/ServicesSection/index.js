import React from 'react'
import Icon1 from '../../image/svg-1.svg'
import Icon2 from '../../image/svg-2.svg'
import Icon3 from '../../image/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper1,ServicesWrapper2, ServicesCol, ServicesRow, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'
const url="https://res.cloudinary.com/dv6yivx37/image/upload/v1690471828/milkhouse/kfwjcpdgayndphlure4j.png";
const url1="https://res.cloudinary.com/dv6yivx37/image/upload/v1690472973/milkhouse/lqlhhvvryfd5hdvs7dij.png";
const url2="https://res.cloudinary.com/dv6yivx37/image/upload/v1690472807/milkhouse/apqbx3euquv7rl8fwdc3.png";
const url3="https://res.cloudinary.com/dv6yivx37/image/upload/v1690473090/milkhouse/pnvx5ybehzvjwyr3syqq.png";
const Icon4="https://res.cloudinary.com/dv6yivx37/image/upload/v1690473256/milkhouse/hqhvzef2yeayc862wnsa.png";
const Services = () => {
  return (
    
    <ServicesContainer id='services'>
        <ServicesWrapper1>    
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>E-Cattle Cart</ServicesH2>
                <ServicesP>Manage your livestock effectively which provides you all info at one place.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Milk Testing</ServicesH2>
                <ServicesP>Get your milk tested with the latest technologies and monitor from anywhere.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Shopping</ServicesH2>
                <ServicesP>Buy our fresh products directly from our dairy and Experience Health Benifits.</ServicesP>
            </ServicesCard>
        </ServicesWrapper1>
        <ServicesWrapper2>
            <ServicesCol>
                <ServicesH1>Know About our Farm and  History</ServicesH1>
                <ServicesP>Our farm is located in the heart of the city and we have been serving our customers 
                for more than 20 years "Enjoy the natural goodness of A2 milk, which is believed to be easier 
                to digest and absorb, making it a favorable choice for those looking for a gentle and nutritious 
                dairy option."</ServicesP>
                <ServicesRow>
               <ServicesIcon src={url} />
               <ServicesIcon src={url1} />/
               <ServicesIcon src={url2} />
               <ServicesIcon src={url3} />
            </ServicesRow>
            {/* <ServicesRow>
               
            </ServicesRow> */}
            </ServicesCol>
            <ServicesCol>
               <ServicesIcon src={Icon4} />
            </ServicesCol>
        </ServicesWrapper2>
    </ServicesContainer>


  );
}

export default Services
