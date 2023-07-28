import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeAge } from './../store/userSlice.js';

function Cart() {

    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch();
    //console.log(a)
    let cart = state.cart;

    return (
        <div>{state.user.name}({state.user.age})의 장바구니
        <button onClick={()=>{
                                dispatch(changeAge(10))}
                            }>+</button>
            <Table striped bordered hover variant="bright">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((a,i)=>{
                            return (
                                <tr>
                                <td>{cart[i].id}</td>
                                <td>{cart[i].name}</td>
                                <td>{cart[i].count}</td>
                                <td><button onClick={()=>{
                                    dispatch(changeName())
                                }}>+</button></td>
                                </tr>
                            )
                        })
                    }
                   
                </tbody>
                </Table>

        </div>
    )
}

export default Cart;