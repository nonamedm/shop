import {useState} from 'react';
import './App.css';
import {Row, Col, Button, Container, Nav, Navbar} from 'react-bootstrap';
import logo from './img/bg.png';
import dataJs from './data.js';
import Detail from './routes/Detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(dataJs);
  let navigate = useNavigate();
  let [moreNum, setMoreNum] = useState(1);
  // console.log(shoes);array
  return (
    <div className="App">
      
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">전체 카테고리</Nav.Link>
            <Nav.Link href="#features">이벤트</Nav.Link>
            <Nav.Link href="#pricing">의뢰</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
{/* 
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg" style={{backgroundImage: "url("+logo+")"}}></div>
              <Container>
                <Row>
                  {
                    shoes.map((a,i)=>{
                      return (
                        <Card shoesCopy={shoes[i]} i={i} key={i}></Card>
                      )
                    })
                  }
                </Row>
                {
                  moreNum < 3 ?
                  <button onClick={()=>{
                    let moreNumChange = moreNum+1;
                    console.log(moreNumChange)
                    axios.get('https://codingapple1.github.io/shop/data'+moreNumChange+'.json').then((data)=>{
                      //console.log(data.data);
                      /*let shoesCopy = [...shoes];
                      for (let i = 0; i < data.data.length; i++) {
                        shoesCopy.push(data.data[i]);
                      };*/
                      let shoesCopy = [...shoes, ...data.data];
                      setMoreNum(moreNumChange);
                      setShoes(shoesCopy);
                    }).catch((e)=>{
                      e.
                      console.log(e.message);
                    })

                    axios.post('',{name:'kim'});
                    /*axios.get('url1')
                    axios.get('url2')*/
                    Promise.all([axios.get('url1'), axios.get('url2')]).then(()=>{
                      //둘다 성공시
                    })
                  }}>벝은</button>
                  :null
                }
              </Container>
          </>
        
        }/>
        <Route path="/detail/:id" element={
          <Detail shoesCopy={shoes} i={0}></Detail>
        }/>
        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>멤버페이지</div>}></Route>
          <Route path="location" element={<div>로케이션페이지</div>}></Route>
        </Route>

        <Route path="*" element={<div>404 Not Found</div>}></Route>
      </Routes>

    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>

  );
}


function Card (props) {
  let shoesCopy = props.shoesCopy;
  //console.log(shoesCopy.length);
  return (
    <Col sm={4}>
    <img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width="80%"/>
      <h4>{shoesCopy.title}</h4>
      <p>{shoesCopy.price}</p>
    </Col>
  );
}


export default App;
