import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'lebron',
    userImg: 'http://placeimg.com/640/480',
    img: 'http://placeimg.com/640/480/nightlife',
    caption: 'This is my practice tailwindcss and next.js !',
  },
  {
    id: '124',
    username: 'lebron',
    userImg: 'http://placeimg.com/640/480',
    img: 'http://placeimg.com/640/480/nightlife',
    caption: 'This is my practice tailwindcss and next.js !',
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
