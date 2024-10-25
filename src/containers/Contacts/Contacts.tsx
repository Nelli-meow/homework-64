import * as React from 'react';

const Contacts = () => {
  return (

    <div className="container">
      <div className="row justify-content-center">
        <div>
          <h1 className="text-center my-4">Contact Us</h1>
          <p className="text-center">Get in touch with our team to learn more</p>

          <form>
            <div className="form-row d-flex ">
              <div className="form-group me-5">
                <label htmlFor="firstName">First Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address <span className="text-danger">*</span></label>
              <input type="email" className="form-control" id="email" placeholder="Email"/>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Notes <span className="text-danger">*</span></label>
              <textarea className="form-control" id="notes" placeholder="Notes" ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <input type="text" className="form-control mb-3" id="jobTitle" placeholder="Job Title" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;