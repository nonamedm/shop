import { useParams } from "react-router-dom";


function Detail (props) {

    let {id} = useParams();
    let number = parseInt(id)+1;

    let cont = props.shoesCopy.find(function(data){
        return data.id == id;
    });

    let shoesCopy = props.shoesCopy;
    return (
        <div className="container">
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