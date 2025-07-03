import React from 'react'
import Row from './common/Row';
import { Link } from 'react-router-dom';
const ProductCard = () => {
    return (
        <Link className='w-full shadow pb-[5px]' to='/product-detail'>
            <img
                className='w-full object-cover h-[400px]'
                src='https://images.unsplash.com/photo-1702506183897-e4869f155209?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Product Card'
            />
            <Row className='px-[10px]'>
                <h6 className='text-black font-semibold text-[16px] mt-[18px]'>Demo Title</h6>
            </Row>

            <Row className="justify-between mt-[16px] px-[10px] mb-[10px]" >
                <p className="text-[16px] text-[#00000080]">Clothing</p>
                <p className="text-[16px] text-[#00000080] font-semibold">$20</p>
            </Row>
        </Link>
    );
}

export default ProductCard;