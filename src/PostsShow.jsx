export function PostShow(props) {
  return (
    <div>
      <h3>Title: {props.post.title}</h3>
      <p>Body: {props.post.body}</p>
      <img src={props.post.image}></img>
    </div>
  );
}
