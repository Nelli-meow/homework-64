import * as React from 'react';
import PostForm from '../../components/PostForm/PostForm.tsx';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { IPosts, IPostsApi } from '../../types';
import axiosApi from '../../axiosAPI.ts';

const EditPost = () => {
  const [post, setPost] = useState<IPosts>();
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
      void fetchOnePost(params.idPost)
    }
  },[params.idPost, fetchOnePost]);

  return post && (
    <div>
      <PostForm postToEdit={post}/>
    </div>
  );
};

export default EditPost;