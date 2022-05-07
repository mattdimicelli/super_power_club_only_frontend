import AvatarImg from "./AvatarImg";
import PostFooter from "./PostFooter";

function Post({ post, isAdmin, isSPCMember }) {
  const { title, body } = post;
  const { avatar } = post.author;

  return (
    <div className="flex justify-center p-4">
      <article
        className="text-center sm:text-left bg-base-100 max-w-2xl flex-1 flex 
            flex-col-reverse items-center sm:flex-row sm:justify-between px-4 py-4 rounded-2xl 
            border-accent border border-solid"
      >
        {isAdmin && (
          <form action="/posts/delete/{post_id}" method="post">
            <button type="submit" className="btn btn-accent self-end">
              Delete
            </button>
          </form>
        )}

        <div className="avatar justify-center self-center w-40 mb-2 shrink-0 sm:h-20">
          <div className="rounded">
            <AvatarImg avatar={avatar} />
          </div>
        </div>
        <section>
          <h2 className="font-bold mb-2 text-primary-content">{title}</h2>
          <p>{body}</p>
          <div className="divider"></div>
          <PostFooter post={post} isSPCMember={isSPCMember} />
        </section>
      </article>
    </div>
  );
}

export default Post;
