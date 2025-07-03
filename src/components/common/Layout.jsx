import React from 'react'
import TopHeader from '../Header/TopHeader';
import Footer from '../Footer';
const Layout = ({children}) => {
    return (
        <div className="w-full bg-[#20262c0d] h-[60px]">
            <TopHeader />
            {children}
            <Footer/>
            </div>
      );
}
 
export default Layout;