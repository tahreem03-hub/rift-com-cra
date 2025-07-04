import React from 'react'
import Container from './common/Container';
import Row from './common/Row';
const Footer = () => {
    return (<Container className="bg-black h-[52px] py-[14px]">
        <Row className="text-white justify-between h-full items-center">
            <p className="">℗ 2025 RiftCom Inc.</p>
            <img
                src="/imgs/cards.png"
                alt="cards"
                className="w-[283px]"
            />
            <p>Scroll to top</p>
        </Row>
    </Container>);
}

export default Footer;