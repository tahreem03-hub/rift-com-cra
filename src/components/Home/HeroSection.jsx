import React from 'react'
import Row from '../common/Row';
import Button from '../common/Button';
const HeroSection = () => {
    return ( 
        <div className="w=full px-[10%] py-[90px]">
        <Row className="w-full item-center justify-between">
          <div className="w-[46%]">
            <h1 className="text-[74px] text-slate-950 font-light">Collections</h1>
            <p className="text-[30px] text-black mt=[52px]">
              You can explore and shop many different collections from  various brands here.
            </p>
            <Button/>
          </div>
          <div className="w-[46%]">
            <div className="w-[424px] h-[542px] relative">
              <img
                //tl (top left) br(bottom right)
                className="animate-[wobble_10s_ease-in] w-full h-full rounded-tl-[160px] rounded-br-[160px]"
                src="https://images.unsplash.com/photo-1576562331281-d09e46af9854?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt='tahreem'
              />
              <div className="absolute animate-[wobble_10s_ease-in] w-full h-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#00000040] top-[20px] left-[18px] -z-[1]" />
            </div>
          </div>
        </Row>
      </div>

     );
}
 
export default HeroSection;