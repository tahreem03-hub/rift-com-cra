import React from 'react'
import Row from '../common/Row';
const BottomHeader = () => {
    const menus = [
        'Jewellery & Accessories',
        'Clothing & Shoes',
        'Home & living',
        'Wedding & Party',
        'Toys & Entertainment',
        'Art & Collectibles',
        'Craft Supplies & Tools'
    ];
    return (
        <div className="w-full px-[10%] h-[60px] bg-[#6491be0d]">
            <Row className="flex items-center h-full justify-between">
                {menus.map((item) =>
                    <p className='text-[16px] text-slate-800' key={item}>{item}</p>
                )}
            </Row>
        </div>
    );
}

export default BottomHeader;