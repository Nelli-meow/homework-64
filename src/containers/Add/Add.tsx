import * as React from 'react';

const Add = () => {
  return (
    <div className="container mt-5">
      <div className="row border border-3 rounded">
        <h1 className="m-3">Add new post</h1>
        <div>
          <form>
            <div className="m-3">
              <label className="form-label">Title</label>
              <input type="title" className="form-control"/>
            </div>
            <div className="m-3">
              <label className="form-label">Description</label>
              <textarea type="Description" className="form-control"/>
            </div>

            <div className="m-3">
              <button type="submit" className="btn btn-outline-info">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;