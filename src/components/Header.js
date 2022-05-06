{/* <header className="navbar flex justify-between">

<div>
    <a href="/" class="btn btn-ghost md:text-xl">
    <img  class="w-40" src="/imgs/nintendo_power.png" alt="nintendo power">
    </a>
</div>

<nav class="dropdown dropdown-end md:hidden">
    <!-- dropdown menu for small viewports -->

    <!-- <label tabindex="0"> is used instead of a <button> because Safari has a bug that prevents
        the button from being focused. -->
    <!-- Using tabindex="0" is required so the dropdown can be focused. -->
    <label tabindex="0" class="btn btn-secondary">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" 
        stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    </label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">

    <% if (locals.user) { %>
    <li><a href="/posts/create-post">Create a New Post</a></li>
        <% if (!locals.user.member) { %>
        <li><a href='/join-super-power-club'>Join the Super Power Club!</a></li>
        <% } %>
    <li><a href='/logout'>Log Out</a></li>
    <% } else { %>
    <li><label for="log-in-modal" class="modal-button">Log In</label></li>
    <li><label for="sign-up-modal" class="modal-button">Register for Basic Access</label></li>
    <% } %>

    </ul>
    </nav>

<nav class="hidden md:navbar-end md:flex md:gap-x-2">
<!-- navbar buttons for medium-sized screens and up -->


    <% if (locals.user) { %>
    <button class="md:btn md:btn-secondary">
    <a href="/posts/create-post">Create a New Post</a>
    </button>
    <% if (!locals.user.member) { %>
    <button class="md:btn md:btn-secondary">
        <a href='/join-super-power-club'>Join the Super Power Club!</a>
    </button>
    <% } %>
    <button class="md:btn md:btn-secondary"><a href='/logout'>Log Out</a></button>
    <% } else { %>
    
    <!-- since this labels a checkbox, a click on the label checks it & opens the 
    Log In modal -->
    <label for="log-in-modal" class="btn btn-secondary btn-sm modal-button md:btn-lg">
    Log In
    </label>
    <!-- since this labels a checkbox, a click on the label checks it & opens the 
    Sign up modal -->
    <label for="sign-up-modal" class="btn btn-secondary btn-sm modal-button md:btn-lg">
    Register for Basic Access
    </label>
    <% } %>

</nav>


</header> */}