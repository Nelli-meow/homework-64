export interface IPost {
  title: string;
  description: string;
}

export interface IPosts {
  id: string;
  title: string;
  description: string;
}

export interface IPostsApi {
  [id: string]: IPosts;
}