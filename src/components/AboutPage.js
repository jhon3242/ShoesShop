import React from 'react';
import {Outlet} from "react-router-dom";

function AboutPage() {
    return <>
        <div>회사 설명 페이지</div>
        <Outlet></Outlet>
    </>

}

export default AboutPage;