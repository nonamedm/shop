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

    let [alertNum,setAlert] = useState(true);

    let [num, setNum] = useState('');

    Detail3();
    useEffect(()=>{
        let a = setTimeout(()=>{
            setAlert(false); 
        },2000);
        return () => {
            //useEffect 동작 전에 실행됨, clean up function
            //예를들어 기존 타이머 제거 후 위의 타이머 실행
            //또는 기존 ajax 등의 데이터요청을 제거 후 실행
            clearTimeout(a);
        }
    }, [count]) //[] -> dependency, state나 변수 집어넣음, 

    useEffect(()=>{}) //재렌더링 마다 코드실행
    useEffect(()=>{}, []) //mount 시 1회 코드 실행하고 싶으면
    useEffect(()=>{
        return () => {
                    //unmount시 1회, useEffect 동작 전에
        }

    }, [count]) //mount 시 1회 코드 실행하고 싶으면, 또는 count 라는 state가 변할 때만 실행하려면

    useEffect(()=>{
        if (isNaN(num) ==true) {
            //alert('돈두댓')
            let numWithChar = [num];
            let numWithoutChar = numWithChar.toString().replace(/[^0-9]/g,'');
            setNum(numWithoutChar)
        }

    }, [num])

    return (
        <div className="container">
            {
                alertNum==true ?
                    <div className="alert alert-warning">
                        2초이내 구매시 할인
                    </div>
                : null
            }
            <Box>
                {count}<YellowBtn bg="blue" onClick={()=>{setCount(count+1)}}>버튼</YellowBtn>
                <YellowBtn bg="orange">버튼</YellowBtn>
            </Box>
            <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+(cont.id+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                <input onChange={(e)=>{
                    setNum(e.target.value)
                }} value={num}></input>
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