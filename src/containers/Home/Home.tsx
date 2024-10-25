import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosAPI.ts';
import { IPosts, IPostsApi } from '../../types';

const Home = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axiosApi.get<IPostsApi>('posts.json');
      if (response.data) {
        const postsFromApi = Object.keys(response.data).map(postKey => ({
          id: postKey,
          ...response.data[postKey],
        }));
        setPosts(postsFromApi);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);


  return (
    <div>
      {posts.length ===  0 ? <p>No posts :( </p> :
        <>
          {posts.map((post) => (
            <div className=" border border-secondary m-4 p-4">
              <span className="text-body-tertiary">Created on: {}</span>
              <h3>{post.title}</h3>
              <button type="button" className="btn btn-outline-warning m-auto">Read more >></button>
            </div>
          ))}
        </>
      }
    </div>
  );
};

export default Home;