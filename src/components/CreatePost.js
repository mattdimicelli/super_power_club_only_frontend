function CreatePost() {
    return (
      <div className="flex justify-center pt-4 px-4 md:pt-16">
        <form
          className="form-control max-w-md flex-1"
          method="post"
          action="/posts/create-post"
          id="create_post"
        >
          <h1 className="mb-2 bg-primary text-primary-content text-center">
            Post a Message
          </h1>
          <label className="label text-sm md:text-base" htmlFor="title">
            Title:
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            maxLength="80"
            pattern=".*\S+.*"
            title="This field is required"
            className="input input-bordered input-xs mb-2"
          />
          <label className="label text-sm md:text-base" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="textarea textarea-bordered mb-2"
            rows="8"
            maxLength="10000"
            required
          ></textarea>
          <button className="btn btn-secondary btn-sm" type="submit">
            Submit Post
          </button>
        </form>
      </div>
    );
}
export default CreatePost;
{/* <div className="flex justify-center pt-4 px-4 md:pt-16">
  <form className="form-control max-w-md flex-1" method="post" action="/posts/create-post" 
    id="create_post">
    <h1 className="mb-2 bg-primary text-primary-content text-center">Post a Message</h1>

    <% if (typeof(errors) !== 'undefined' && errors?.title) { %>
    <label className="label text-sm md:text-base text-error-content bg-error" htmlFor="title">
      Title required:
    </label>
    <% } else { %>
    <label className="label text-sm md:text-base" htmlFor="title">Title:</label>
  
    <% } %>
    <% if (typeof(errors) !== 'undefined' && errors) { %>
    <input id="title" name="title" type="text" required maxLength="80" pattern=".*\S+.*" 
    title="This field is required" className="input input-bordered input-xs mb-2" value="<%= title %>">
    <% } else { %>
    
    <input id="title" name="title" type="text" required maxLength="80" pattern=".*\S+.*" 
      title="This field is required" className="input input-bordered input-xs mb-2">
    <% } %>
    <% if (typeof(errors) !== 'undefined' && errors?.body) { %>
    <label className="label text-sm md:text-base text-error-content bg-error" htmlFor="message">
      Message required:
    </label>
    <% } else { %>
    
    <label className="label text-sm md:text-base" htmlFor="message">Message:</label>
    <% } %>
    
    <% if (typeof(errors) !== 'undefined' && errors) { %>
    <textarea id="message" name="message" className="textarea textarea-bordered mb-2" rows="8" 
      maxLength="10000" required><%= body %></textarea>
    <% } else { %>
    <textarea id="message" name="message" className="textarea textarea-bordered mb-2" rows="8" 
      maxLength="10000" required></textarea>
    <% } %>
    <button className="btn btn-secondary btn-sm" type="submit">Submit Post</button>
  </form>
<div></div> */}