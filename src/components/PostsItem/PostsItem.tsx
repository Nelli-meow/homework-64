import * as React from 'react';

interface Props {
  title: string;
  id: string;
}

const PostsItem: React.FC<Props> = ({title, id}) => {
  return (
    <div className="container">
      <div className=" border border-secondary mb-2 p-4">
        <span className="text-body-tertiary">Created on: {id}</span>
        <h3>{title}</h3>
        <button type="button" className="btn btn-outline-warning m-auto">Read more >></button>
      </div>
    </div>
  );
};

export default PostsItem;