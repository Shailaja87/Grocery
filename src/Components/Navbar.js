import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props){
    return(

        <div style={{'margin-left':'0'}}>
            <nav className="navbar navbar-expand-lg navbar-danger" style={{'backgroundColor':'#40A578'}}>
  <div className="container-fluid  " style={{'margin-left':'20%'}}>
    <Link className="navbar-brand fs-3 " style={{'padding-right':'20%','color':'white','linkStyle':'none'}}  to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" style={{'paddingLeft':'10%'}}>
      <ul className="navbar-nav " style={{'margin-left':'25%'}}>
        <li className="nav-item" style={{'marginRight':'5%%'}}>
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          <Link className='nav-link fs-5' style={{'color':'white','linkStyle':'none'}} to='/'>Home</Link>
        </li>
        <li className="nav-item"style={{'marginRight':'5%'}}>
        <Link className='nav-link fs-5'style={{'color':'white','linkStyle':'none'}} to='/About'>About</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link fs-5'style={{'color':'white','linkStyle':'none'}} to='/login'>Login/SignUp</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

        </div>


    );
}