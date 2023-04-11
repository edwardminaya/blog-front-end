import axios from "axios";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form action="">
        Title <input type="text" name="" id="" />
      </form>
      <form action="">
        Body <input type="text" name="" id="" />
      </form>
      <form action="">
        Image <input type="text" name="" id="" />
      </form>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((posts) => (
        <div key={posts.id} className="posts">
          <h3>{posts.title}</h3>
          <p>{posts.body}</p>
          <img src={posts.image} />
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}

function Content() {
  let posts = [];
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      posts = response.data;
    });
  };
  return (
    <div>
      <PostsNew />
      <button onClick={handleIndexPosts}>Load Posts</button>
      <PostsIndex posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
