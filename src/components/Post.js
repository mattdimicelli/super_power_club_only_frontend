import bowser from '../images/bowser.png';
import dk from '../images/dk.png';
import fox from '../images/fox.png';
import kirby from '../images/kirby.jpg';
import link from '../images/link.png';
import luigi from '../images/luigi.png';
import mario from '../images/mario.png';
import peach from '../images/peach.png';
import samus from '../images/samus.png';
import yoshi from '../images/yoshi.png';

function Post({post, isLoggedIn, isAdmin}) {
    const charAvatars = { bowser, dk, fox, kirby, link, luigi, mario, peach, samus, yoshi }
    const { title, body, timestamp } = post;
    const { avatar, firstName, lastName } = post.author;
    const fullName = `${firstName} ${lastName}`;

    let textBelowDivider;
    if (isLoggedIn) {
        textBelowDivider = 
        <>
            <div className="text-sm sm:text-base">Posted by {fullName}</div>
            <div className="mb-2 text-sm sm:text-base">{timestamp.toLocaleString()}</div>
        </>;
    } else {
        textBelowDivider = 
        <>
            <div className="text-sm sm:text-base mb-2">Join the <span className="uppercase text-primary 
                        italic font-bold [text-shadow:-1px_0.5px_#f4290f]">Super Power Club</span>
                        <span> to see who posted and when!</span>
            </div>
        </>
    };

    return (
<div className="flex justify-center p-4">
        <article className="text-center sm:text-left bg-base-100 max-w-2xl flex-1 flex 
            flex-col-reverse items-center sm:flex-row sm:justify-between px-4 py-4 rounded-2xl 
            border-accent border border-solid">
                {isAdmin && 
                
                    <form action="/posts/delete/{post_id}" method="post">
                        <button type="submit" className="btn btn-accent self-end">Delete</button>
                    </form>
                
                }
                <div className="avatar justify-center self-center w-40 mb-2 shrink-0 sm:h-20">
                    <div className="rounded">
                        <img src={charAvatars[avatar]} alt={avatar} />
                    </div>
                </div>
                <section>
                    <h2 className="font-bold mb-2 text-primary-content">{title}</h2>
                    <p>{body}</p>
                    <div className="divider"></div>
                    {textBelowDivider}
                </section>
        </article>
    </div>
    );
}


export default Post;