export function PostShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" defaultValue={props.post.title} type="text" />
        </div>
        <div>
          Body: <input name="body" defaultValue={props.post.body} type="text" />
        </div>
        <div>
          Image: <input name="image" defaultValue={props.post.image} type="text" />
        </div>
        <button type="submit">Edit</button>
      </form>
      <button onClick={handleClick}>Delete Post</button>
    </div>
  );
}
