<%- include('partials/_top') %>
    <script type="module" nonce="8888078926mrd">
        let yearInput = document.querySelector('#year');
        document.querySelector('#year_form').addEventListener('submit', (e) => {
            if (yearInput.value === '2012') {
                alert('Congratulations!! Your answer was correct! Welcome to the Super Power Club!');
                return true;
            }
            else {
                alert("That's not right! Try again!");
                e.returnValue = false;
                return false;
            } 
        });
    </script>
    <!-- use type="module" bc they defer by default -->
<%- include('partials/_second_top') %>
<header class="navbar flex justify-between md:mb-24">
<%- include('partials/_fourth_top') %>

<main class="hero">
    <div class="hero-content text-center justify-center flex flex-col md:flex-row md:justify-between md:gap-16">
        <div>
            <h1 class="uppercase text-secondary italic text-2xl md:mb-2">Whoa!</h1>
            <img class="hidden md:block mb-2" src="/imgs/woah.jpg" alt="surprised man">
            <h2 class="uppercase text-accent italic text-lg">
                You're not going to believe what's inside!
            </h2>
        </div>
        <div>
            <h3 class="mb-4 sm:mb-8 text-accent text-xl">Join the... </h3>
            <img src="/imgs/super_power_club.png" alt="super power club" class="mb-2 sm:mb-8">
        </div>
         <div>
            <h4 class="uppercase text-accent">Limited Time Offer!</h4>
            <br class="mb-2"/>
            <p>For a Limited Time only you can join the 
             <span class="uppercase text-primary italic font-bold [text-shadow:-1px_0.5px_#f4290f]">
                    Super Power Club
             </span> by correctly answering the following Nintendo triva question!
            </p>
            <br class="mb-2"/>
            <form id="year_form" class="form-control" action="/join-super-power-club" method="post">
                <label class="mb-2 md:mb-6" for="year"><span>In what year was </span>
                    <img src='/imgs/nintendo_power.png' class="w-24 inline-block" 
                        alt='Nintendo Power'>
                <span> magazine discontinued?</span>
                </label>
                <input class="mb-2 input input-bordered md:self-center md:mb-6" type="number" name="year" id="year" 
                    required>  
                <button class="btn btn-secondary md:self-center" type="submit">
                    Join the Super Power Club!
                </button>
            </form>
         </div>   
            
    
    </div>
</main>

<% include('partials/_bottom') %></header>