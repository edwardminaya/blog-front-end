export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onCreatePost(params);
    event.target.reset();
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          title: <input name="title" type="text" />
        </div>
        <div>
          body: <input name="body" type="text" />
        </div>
        <div>
          Image <input name="image" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
