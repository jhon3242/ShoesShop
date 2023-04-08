import './App.css';
import { Container, Nav, Navbar} from "react-bootstrap";
import bgImg from "./imgs/main-bg.jpg"
import Items from "./components/Items";
import { Route, Routes} from "react-router-dom";
import DetailPage from "./components/DetailPage";
import AboutPage from "./components/AboutPage";
import EventPage from "./components/EventPage";
import NotingPage from "./components/NotringPaege";
import {useState} from "react";
import initData from "./mock"

function MainPage(props) {
    return (
        <>
            <div className={"main-bg"} style={{backgroundImage : `url(${bgImg})`}}></div>
            <Items data={props.data} />
        </>
    )
}



function App() {
    const [data] = useState(initData);

  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Choi Shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/detail">Detail</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <Routes>
            <Route path={"/"} element={< MainPage data={data} />}></Route>
            <Route path={"/detail/:id"} element={< DetailPage data={data} />}></Route>
            <Route path={"/about"} element={<AboutPage/>}>
                <Route path={"member"} element={<div>맴버 설명</div>} />
                <Route path={"location"} element={<div>위치 설명</div>} />
            </Route>
            <Route path={"event"} element={<EventPage/>}>
                <Route path={"one"} element={<div>첫 주문 시 할인 15%</div>}/>
                <Route path={"two"} element={<div>생일기념 쿠폰 받기</div>}/>
            </Route>

            <Route path={"*"} element={<NotingPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
