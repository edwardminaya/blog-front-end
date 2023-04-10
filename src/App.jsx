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
  let posts = [
    {
      id: 1,
      title: "Synergized tangible paradigm",
      body: "rony roof authentic gluten-free chillwave helvetica. Celiac salvia pickled artisan. ",
      image: "https://i.picsum.photos/id/302/200/300.jpg?hmac=b5e6gUSooYpWB3rLAPrDpnm8PsPb84p_NXRwD-DK-1I",
    },
    {
      id: 1,
      title: "Multi-layered holistic implementation",
      body: "3 wolf moon art party viral. Selvage stumptown kale chips five dollar toast. Artisan",
      image: "https://i.picsum.photos/id/131/200/300.jpg?hmac=9q7mRSOguNBFGg_gPPRKlfjNINGjXWeDBTYPP1_gEas",
    },
  ];
  return (
    <div>
      <PostsNew />
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
