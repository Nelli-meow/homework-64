import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosAPI.ts';
import { IPosts, IPostsApi } from '../../types';
import { Link } from 'react-router-dom';
import Loader from '../../components/UI/Loader.tsx';

const Home = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);


  return (
    <div>
      {loading ? (
        <Loader />
      ) : posts.length === 0 ? (
        <p>No posts :(</p>
      ) : (
        <>
          <h1 className="text-center m-4">All posts</h1>
          {posts.map((post) => (
            <div className="border border-secondary m-4 p-4" key={post.id}>
              <span className="text-body-tertiary">Created on: {post.date}</span>
              <h3>{post.title}</h3>
              <Link
                to={`/posts/${post.id}`}
                type="button"
                className="btn btn-outline-warning m-auto"
              >
                Read more >>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;