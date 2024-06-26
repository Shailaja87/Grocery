import { Link } from "react-router-dom";
import { useState } from "react";
const Card=()=>{

    const[price ,totalPrice]=useState("")
 
   const countTotal=()=>{
    
    const numberId=document.getElementById('number')
    const amountofItem=document.getElementById('halforfull')
    const NumberOfItem=parseInt(numberId.value,10);
    let amount;
    if(amountofItem.value==='full'){
    amount=100*NumberOfItem;}
    else{
        amount=50*NumberOfItem;
    }
    totalPrice(amount);        
}

    return(
      
        <div className="card" style={{"width": "18rem",'margin':'2%','display':'inline-block'}}>
            <img src="https://fastly.picsum.photos/id/46/3264/2448.jpg?hmac=ZHE8nk-Q9uRp4MxgKNvN7V7pYFvA-9BCv99ltY3HBv4" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 classNameName="card-title">Card title</h5>
            <h5 classNameName="card-title">Price:100</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <select style={{'width':'100px','marginRight':'10px'}} id="number">
                {
                    Array.from(Array(6),(e,i)=>{
                        return(
                            <option key={i+1} value={i+1}>{i+1}</option>
                        )
                    })
                }
            </select>
            <select style={{'width':'100px','marginRight':'10px'}} id="halforfull">
                    <option key={'half'} value={'half'} >{'half'}</option>
                    <option key={'full'} value={'full'} >{'full'}</option>

            </select>

            <Link to="/" className="btn btn-success" style={{'marginTop':'10px'}} onClick={countTotal}>Book</Link>
            <label>{price}</label>

            

        </div>
        </div>

    );


}



export default Card;
