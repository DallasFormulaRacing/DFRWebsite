export type User = {
  id: string;
  email: string;
  name: string;
  position: string;
  //posts: FormattedPost[];
};
export type FormattedPost = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  category: string;
  content: string;
  author: string;
  image: string;
  snippet: string;
};
