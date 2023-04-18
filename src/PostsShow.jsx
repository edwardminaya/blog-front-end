import axios from "axios";

export function PostShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch("http://localhost:3000/posts/" + props.post.id + ".json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
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
    </div>
  );
}
