function DropdownMenu({isLoggedIn, isSPCMember}) {
    let btnSet;
    if (isLoggedIn) {
        btnSet = <> 
                    <li><a href="/posts/create-post">Create a New Post</a></li>

                    {!isSPCMember &&
                    <li><a href='/join-super-power-club'>Join the Super Power Club!</a></li>
                    }
                    
                    <li><a href='/logout'>Log Out</a></li>
                </>;
    }
    else {
        btnSet = <>
                    <li><label htmlFor="log-in-modal" className="modal-button">Log In</label></li>
                    <li>
                        <label htmlFor="sign-up-modal" className="modal-button">
                            Register for Basic Access
                        </label>
                    </li>
                </>;
    }

    return (
        <nav className="dropdown dropdown-end md:hidden">
            {/* <label tabIndex="0"> is used instead of a <button> because Safari has a bug that 
            prevents the button from being focused.  */}
            {/* Using tabIndex="0" is required so the dropdown can be focused. */}
            <label tabIndex="0" className="btn btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" 
                stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </label>
            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {btnSet}
            </ul>
        </nav>
    );
}

export default DropdownMenu;
