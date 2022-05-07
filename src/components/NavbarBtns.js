function NavbarBtns({ isLoggedIn, isSPCMember }) {
  let btnSet;
  if (isLoggedIn) {
    btnSet = (
      <>
        <button className="md:btn md:btn-secondary">
          <a href="/posts/create-post">Create a New Post</a>
        </button>

        {!isSPCMember && (
          <button className="md:btn md:btn-secondary">
            <a href="/join-super-power-club">Join the Super Power Club!</a>
          </button>
        )}

        <button className="md:btn md:btn-secondary">
          <a href="/logout">Log Out</a>
        </button>
      </>
    );
  } else {
    btnSet = (
      <>
        {/* since this labels a checkbox, a click on the label checks it & opens the 
                    Log In modal */}
        <label
          htmlFor="log-in-modal"
          className="btn btn-secondary btn-sm modal-button md:btn-lg"
        >
          Log In
        </label>
        {/* since this labels a checkbox, a click on the label checks it & opens the 
                    Sign up modal */}
        <label
          htmlFor="sign-up-modal"
          className="btn btn-secondary btn-sm modal-button md:btn-lg"
        >
          Register for Basic Access
        </label>
      </>
    );
  }

  return (
    <nav className="hidden md:navbar-end md:flex md:gap-x-2">{btnSet}</nav>
  );
}

export default NavbarBtns;
