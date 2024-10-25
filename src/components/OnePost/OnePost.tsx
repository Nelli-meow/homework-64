import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { IPostsApi } from '../../types';
import axiosApi from '../../axiosAPI.ts';

const OnePost = () => {
  const [post, setPost] = useState<IPostsApi>({});
  const params = useParams<{idPost: string}>();

  const fetchOnePost = useCallback(async (id: string) => {
    try {
      const response = await axiosApi.get<IPostsApi>(`posts/${id}.json`);

      if (response.data) {
        setPost(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    if(params.idPost) {
      void fetchOnePost(params.idPost);
    }
  },[params.idPost, fetchOnePost]);

  return (
    <div className="container">
      <h1 className="text-center m-4">One post</h1>
      <div className="d-flex flex-column  justify-content-sm-between border border-2 m-5 p-3">
        <h2>{post.title}<span className="ms-2 text-body-tertiary fs-5">{post.date}</span></h2>
        <p>{post.description}</p>
        <div className="d-flex align-items-center justify-content-sm-between m-2">
          <button type="button" className="btn btn-outline-primary">Edit</button>
          <button type="button" className="btn btn-outline-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default OnePost;