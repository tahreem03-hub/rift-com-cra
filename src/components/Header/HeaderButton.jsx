import React from 'react'
import Row from '../common/Row'
import {Link} from 'react-router-dom'
/* no this keyword in functional component */ 
const HeaderButton = ({title,Icon, url='/'}) => {
   // const{title,icon}=props  destructuring (i we receive props object)
    return (
        <Link to={url}>
        <Row className='mx-[5px]'>
            <Icon/>
            <p className="text-[#1e2832] text-[18px] hover:text-slate-400 ml-[2px]">
                {title}
            </p>
        </Row>
        </Link>
    )
}

export default HeaderButton;