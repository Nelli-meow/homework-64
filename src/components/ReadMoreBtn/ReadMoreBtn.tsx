import * as React from 'react';
import OnePost from '../OnePost/OnePost.tsx';

const ReadMoreBtn = () => {

  const getInfo = () => {

  }

  return (
    <button onClick={getInfo} type="button" className="btn btn-outline-warning m-auto" component={OnePost} to>Read more >></button>
  );
};

export default ReadMoreBtn;