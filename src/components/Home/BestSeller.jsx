import React from 'react'
import Container from '../common/Container';
import Row from '../common/Row';
import ProductCard from '../ProductCard';
const BestSeller = () => {
    return (
        <Container>

            <h1 className='w-full text-center text-[30px] text-[#1e2832d4] font-semibold mt-[80px] mb-[40px] uppercase'>Best Seller</h1>
            <Row className='items-center'>
                <p className='text-[16px] mr-[40px] cursor-pointer text-black font-bold hover:text-[#757575]'>All Products</p>
                <p className='text-[16px] mr-[40px] cursor-pointer text-[#00000080] hover:text-[#757575]'>Clothing</p>
                <p className='text-[16px] mr-[40px] cursor-pointer text-[#00000080] hover:text-[#757575]'>Shoes</p>
                <p className='text-[16px] mr-[40px] cursor-pointer text-[#00000080] hover:text-[#757575]'>Bags</p>
                <p className='text-[16px] mr-[40px] cursor-pointer text-[#00000080] hover:text-[#757575]'>Others</p>
            </Row>

            <Row className='flex-wrap gap-[1%] mt-[40px]'>
                <div className="w-[24%] mb-[20px]">
                    <ProductCard />
                </div>
                <div className="w-[24%] mb-[20px]">
                    <ProductCard />
                </div>
                <div className="w-[24%] mb-[20px]">
                    <ProductCard />
                </div>
                <div className="w-[24%] mb-[20px]">
                    <ProductCard />
                </div>
                <div className="w-[24%] mb-[20px]">
                    <ProductCard />
                </div>
                <div className="w-[24%] mb-[20px]">
                    <ProductCard />
                </div>
                <div className="w-[24%] mb-[20px]">
                    <ProductCard />
                </div>
                <div className="w-[24%] mb-[20px]">
                    <ProductCard />
                </div>
            </Row>
        </Container>);
}

export default BestSeller;