import React from 'react'
import Container from '../common/Container';
import Row from '../common/Row';
import { Link } from 'react-router-dom';
import axios from 'axios'
import apiEndpoints from '../../apis/endpoint';
import react,{useEffect, useState} from 'react'

/*const [a,b,c]=[1,2,3]
equivalent to
arr=[1,2,3]
arr[0]=a
arr[1]=b
arr[2]=c*/

const PopularProducts = () => {
    //useState returns an array...it is destructuring of array
    const [set,setState]=useState();

    useEffect(()=>{
        axios
        .get(`http://localhost:4000${apiEndpoints.products()}`)
        .then((res)=>{
            console.log("REE",res);
        })
        .catch((err)=>{
            console.log("ERR",err)
        })

    },[]);

    return (
        <Container>
            <Row className='justify-center my-[20px] uppercase'>
                <h1 className='text-[30px] font-semibold text-[#1e2832ab]'>Popular Products</h1>
            </Row>
            <Row className='gap-[24px]'>
                <div className='h-[648px] w-[52px] relative'>
                    <p className='text-[34px] h-full w-[648px] text-black -rotate-90 absolute text-center -z-[1]'>
                        Explore new and popular styles
                    </p>
                </div>

                <Link to='/product-detail'>
                    <img
                        className='w-[648px] h-[648px] object-cover cursor-pointer'
                        src='https://images.unsplash.com/photo-1604200657090-ae45994b2451?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='fruit'
                    />
                </Link>
                <Row className='flex-wrap w-[50%] gap-[24px]'>
                    {[...new Array(4)].map((_,idx) => (
                        <Link to='/product-detail' className='w-[46%] h-[312px]' key={idx}>

                            <img
                                src='https://images.unsplash.com/photo-1604200657090-ae45994b2451?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                alt='fruit'
                                className='w-[312px] h-full object-cover'
                            />

                        </Link>))}


                </Row>
            </Row>
        </Container>);
}

export default PopularProducts;