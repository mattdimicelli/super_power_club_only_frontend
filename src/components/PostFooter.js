function PostFooter({post, isSPCMember}) {
    const { timestamp } = post;
    const { firstName, lastName } = post.author;
    const fullName = `${firstName} ${lastName}`;
    let postFooter;
    if (isSPCMember) {
        postFooter = 
        <>
            <div className="text-sm sm:text-base">Posted by {fullName}</div>
            <div className="mb-2 text-sm sm:text-base">{new Date(timestamp).toLocaleString()}</div>
        </>;
    } else {
        postFooter = 
        <>
            <div className="text-sm sm:text-base mb-2">Join the <span className="uppercase text-primary 
                        italic font-bold [text-shadow:-1px_0.5px_#f4290f]">Super Power Club</span>
                        <span> to see who posted and when!</span>
            </div>
        </>
    };
    return postFooter;
}

export default PostFooter;
