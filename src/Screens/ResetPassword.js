import { Link } from "react-router-dom";

const ResetPass=()=>{
    return (
        <>

<section className="bg-light py-3 py-md-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
        <div className="card border border-light-subtle rounded-3 shadow-sm">
          <div className="card-body p-3 p-md-4 p-xl-5">
            <div className="text-center mb-3">
              
            </div>
            <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Provide the email address associated with your account to recover your password.</h2>
            <form action="#!">
              <div className="row gy-2 overflow-hidden">
                <div className="col-12">
                  <div className="form-floating">
                    <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required/>
                    <label for="email" className="form-label">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid my-3">
                    <button className="btn btn-success btn-lg" type="submit">Reset Password</button>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex gap-2 justify-content-between">
                    <Link to="/login" className="link-success text-decoration-none">Log In</Link>
                    <Link to="/SignUp" className="link-success text-decoration-none">Register</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section></>
    );
}

export default ResetPass;