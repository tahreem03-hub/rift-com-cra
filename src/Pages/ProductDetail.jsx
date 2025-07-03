
import Layout from '../components/common/Layout'
import Container from '../components/common/Container';
import Row from '../components/common/Row';
import React from 'react';
import Button from '../components/common/Button';
import QtyContainer from '../components/common/QtyContainer';



const ProductDetail = () => {
    return (
        <Layout>

            <Container className="my-[41px]">
                <Row className="justify-between">
                    <Row className="w-[47%]">
                        <img
                            className="w-full object-cover h-[80vh]"
                            src='https://images.unsplash.com/photo-1702506183882-187899632aa3?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt="product details"
                        />
                    </Row>
                    <Row className=" flex-col w-[47%]">
                        <h1 className="text-[30px] text-slate-700 font-semibold mb-[70px]">Clothing ! Demo Product</h1>

                        <Row className="gap-[20px] mb-[10px]">
                            <p className="text-[18px] text-black font-medium w-[15%]">Rating:</p>
                            <p className="text-[18px] text-black ">2/5</p>
                        </Row>
                        <Row className="gap-[20px]">
                            <p className="text-[18px] text-black font-medium w-[15%]">Price:</p>
                            <p className="text-[18px] text-black ">$20</p>
                        </Row>
                        <Row className="gap-[20px]">
                            <p className="text-[18px] text-black font-medium w-[15%]">Category:</p>
                            <p className="text-[18px] text-black ">Clothing</p>
                        </Row>
                        <Row className="gap-[20px] mt-[30px]">
                            <p className="text-[18px] text-black font-medium w-[15%]">Description:</p>
                            <p className="text-[18px] text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non dignissimos sequi rem quibusdam tempore, laborum eligendi iste dolor tempora expedita sit repellendus esse incidunt? Nobis sequi delectus rem tempora!
                                Dolor placeat sed facere vero ex a labore esse excepturi alias temporibus.</p>
                        </Row>

                        <div className='w-full mt-[40px]'>
                            <QtyContainer />
                        </div>
                        
                        <Button title='Add to cart' className="w-[174px] h-[52px] mt-[20px]" />
                    </Row>
                </Row>
            </Container>
        </Layout>);
}

export default ProductDetail;