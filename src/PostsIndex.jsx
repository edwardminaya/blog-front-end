import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  console.log(props);
  return (
    <div id="posts-index">
      <h1 className="all-posts">All posts</h1>
      <div>
        Search filter:
        <input
          type="text"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          list="titles"
        />
      </div>
      <datalist id="titles">
        {props.posts.map((post) => (
          <option key={post.id} value={post.title} />
        ))}
      </datalist>

      {props.posts
        .filter((post) => post.title.toLowerCase().includes(searchFilter.toLocaleLowerCase()))
        .map((post) => (
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
