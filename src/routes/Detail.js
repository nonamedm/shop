import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import styled from 'styled-components';

let YellowBtn = styled.button`
    background : ${props => props.bg};
    color: ${props => props.bg == 'blue' ? 'white' : 'black'};
    padding : 10px;
`

let Box = styled.div`
    background : grey;
    padding: 20px;
`

function Detail3 () {
    useEffect(()=>{
        //mount 및 update시
        //실행시점은 html 렌더링 후 실행
        //console.log('ㅎ2');
    })
}


function Detail (props) {
    
    let [count, setCount] = useState(0);
    
    let {id} = useParams();
    let number = parseInt(id)+1;
    
    let cont = props.shoesCopy.find(function(data){
        return data.id == id;
    });
    
    let shoesCopy = props.shoesCopy;

    let [alert,setAlert] = useState(true);

    Detail3();
    useEffect(()=>{
        setTimeout(()=>{
            setAlert(false); 
        },2000)
    })
    return (
        <div className="container">
            {
                alert==true ?
                    <div className="alert alert-warning">
                        2초이내 구매시 할인
                    </div>
                : null
            }
            <Box>
                <YellowBtn bg="blue" onClick={()=>{setCount(count+1)}}>버튼</YellowBtn>
                <YellowBtn bg="orange">버튼</YellowBtn>
            </Box>
            <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+(cont.id+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{cont.title}</h4>
                <p>{cont.content}</p>
                <p>{cont.price}</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    );
}

export default Detail;