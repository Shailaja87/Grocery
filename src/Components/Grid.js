import Card from "./Card";

export default function Grid(){

    return(

        <>
            <div className="container" style={{'marginTop':'5%'}}>
                <div className="row">
                <div className="col"><Card/></div>
                <div className="col"><Card/></div>
                <div className="col"><Card/></div>
                <div className="col"><Card/></div>
                </div>
            </div>


        </>

    );

}