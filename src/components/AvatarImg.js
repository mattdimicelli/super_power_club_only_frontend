import bowser from "../images/bowser.png";
import dk from "../images/dk.png";
import fox from "../images/fox.png";
import kirby from "../images/kirby.jpg";
import link from "../images/link.png";
import luigi from "../images/luigi.png";
import mario from "../images/mario.png";
import peach from "../images/peach.png";
import samus from "../images/samus.png";
import yoshi from "../images/yoshi.png";

function PostAvatar({ avatar }) {
  const charAvatars = {
    bowser,
    dk,
    fox,
    kirby,
    link,
    luigi,
    mario,
    peach,
    samus,
    yoshi,
  };

  return (
    <>
      <img src={charAvatars[avatar]} alt={avatar} />
    </>
  );
}

export default PostAvatar;
