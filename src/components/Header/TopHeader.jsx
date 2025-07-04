import React from 'react'
import Row from '../common/Row';
import SearchIcon from '../../svgs/SearchIcon';
import RotatedSquare from '../../svgs/RotatedSquare';
import HeaderButton from './HeaderButton';
import UserIcon from '../../svgs/UserIcon';
import BucketIcon from '../../svgs/BucketIcon';
const TopHeader = () => {
    return (
        <div className="w-full px-[10%] h-full">
            <Row className="flex items-center h-full justify-between">
                <SearchIcon />
                <Row className='items-center'>
                    <RotatedSquare />
                    <h1 className="text-[28px] text-black mx-[10px]">RiftCom</h1>
                    <RotatedSquare />
                </Row>
                <Row>
                    <HeaderButton title="Account" Icon={UserIcon} />
                    <HeaderButton title="Cart" Icon={BucketIcon} url='/cart'/>
                </Row>
            </Row>
        </div>
    );
}

export default TopHeader;