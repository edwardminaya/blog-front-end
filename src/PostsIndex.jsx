export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1 className="all-posts">All posts</h1>
      {props.posts.map((posts) => (
        <div key={posts.id} className="posts">
          <h3>{posts.title}</h3>
          <p>{posts.body}</p>
          <img src={posts.image} />
          <div>
            <button onClick={props.onShowPosts}>More Info</button>
          </div>
        </div>
      ))}
    </div>
  );
}
