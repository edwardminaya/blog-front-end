export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1 className="all-posts">All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <img src={post.image} />
          <div className="button">
            <button onClick={() => props.onShowPost(post)}>More info</button>
          </div>
        </div>
      ))}
    </div>
  );
}
