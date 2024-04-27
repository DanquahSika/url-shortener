import React from 'react';
import './Setting.css'

const ProfilePage = () => {
  return (
  <div>
  <form>
    <div className="form-group px-3">
      <label htmlFor="displayName">Name</label>
      <input type="text" className="col-md-8 form-control" placeholder="Jane Doe" />
      <label htmlFor="email" className="pt-3">Email</label>
      <input type="email" className="col-md-8 form-control" placeholder="name@example.com" />
    </div>
    <div className="form-group row mb-0 mr-4">
      <div className="col-md-8 offset-md-4 text-right">
        <button type="submit" className="btn btn-primary">Save</button>
      </div>
    </div>
  </form>
  <div className="border-bottom border-grey" />
  <div className="row justify-content-center pt-5">
    <div className="col-lg-4">
      <h4 className="pb-2">Update Password</h4>
      <span className="text-justify" style={{paddingTop: '-3px'}}>Ensure your account is using a long, random password to stay secure.</span>
    </div>
    <div className="col-lg-8 text-center pt-2">
      <div className="card py-4 mb-5 mt-md-3 bg-white rounded" style={{boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.175)'}}>
        <form>
          <div className="form-group px-3">
            <label htmlFor="password">New Password</label>
            <input type="password" className="col-md-8 form-control" placeholder="Password" />
            <label htmlFor="password" className="pt-3">Confirm Password</label>
            <input type="password" className="col-md-8 form-control" placeholder="Password" />
          </div>
          <div className="form-group row mb-0 mr-4">
            <div className="col-md-8 offset-md-4 text-right">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="border-bottom border-grey" />
  <div className="row justify-content-center pt-5">
    <div className="col-lg-4">
      <h4 className="pb-2">Delete Account</h4>
      <span className="text-justify" style={{paddingTop: '-3px'}}>Permanently delete your account.</span>
    </div>
    <div className="col-lg-8 pt-0">
      <div className="card py-4 mb-5 mt-md-3 bg-white rounded" style={{boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.175)'}}>
        <div className="text-left px-3">
          Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.
        </div>
        <form>
          <div className="form-group row mb-0 mr-4 pt-4 px-3">
            <div className="col-md-8 offset-l-4 text-left">
              <button type="submit" className="btn btn-danger pl-3">Delete Account</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


  );
};

export default ProfilePage;