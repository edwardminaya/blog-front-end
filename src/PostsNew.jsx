export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <div className="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">
          Title
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Body</label>
      </div>
      <form action="">
        Image <input type="text" name="" id="" />
      </form>
      <button type="submit">Create</button>
    </div>
  );
}
