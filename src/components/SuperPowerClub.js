import woah from '../images/woah.jpg';
import superPowerClub from '../images/super_power_club.png';
import nintendoPower from '../images/nintendo_power.png';

function SuperPowerClub() {
    return (
<main className="hero md:mt-24">
    <div className="hero-content text-center justify-center flex flex-col md:flex-row md:justify-between md:gap-16">
        <div>
            <h1 className="uppercase text-secondary italic text-2xl md:mb-2">Whoa!</h1>
            <img className="hidden md:block mb-2" src={woah} alt="surprised man" />
            <h2 className="uppercase text-accent italic text-lg">
                You're not going to believe what's inside!
            </h2>
        </div>
        <div>
            <h3 className="mb-4 sm:mb-8 text-accent text-xl">Join the... </h3>
            <img src={superPowerClub} alt="super power club" className="mb-2 sm:mb-8" />
        </div>
         <div>
            <h4 className="uppercase text-accent">Limited Time Offer!</h4>
            <br className="mb-2"/>
            <p>For a Limited Time only you can join the 
             <span className="uppercase text-primary italic font-bold [text-shadow:-1px_0.5px_#f4290f]">
                    Super Power Club
             </span> by correctly answering the following Nintendo triva question!
            </p>
            <br className="mb-2"/>
            <form id="year_form" className="form-control" action="/join-super-power-club" method="post">
                <label className="mb-2 md:mb-6" htmlFor="year"><span>In what year was </span>
                    <img src={nintendoPower} className="w-24 inline-block" 
                        alt='Nintendo Power' />
                <span> magazine discontinued?</span>
                </label>
                <input className="mb-2 input input-bordered md:self-center md:mb-6" type="number" name="year" id="year" 
                    required />  
                <button className="btn btn-secondary md:self-center" type="submit">
                    Join the Super Power Club!
                </button>
            </form>
         </div>   
            
    
    </div>
</main>
    )
}
export default SuperPowerClub;
// <%- include('partials/_top') %>
//     <script type="module" nonce="8888078926mrd">
//         let yearInput = document.querySelector('#year');
//         document.querySelector('#year_form').addEventListener('submit', (e) => {
//             if (yearInput.value === '2012') {
//                 alert('Congratulations!! Your answer was correct! Welcome to the Super Power Club!');
//                 return true;
//             }
//             else {
//                 alert("That's not right! Try again!");
//                 e.returnValue = false;
//                 return false;
//             } 
//         });
//     </script>
//     <!-- use type="module" bc they defer by default -->
// <%- include('partials/_second_top') %>
// <header className="navbar flex justify-between md:mb-24">
// <%- include('partials/_fourth_top') %>

{/* <main className="hero">
    <div className="hero-content text-center justify-center flex flex-col md:flex-row md:justify-between md:gap-16">
        <div>
            <h1 className="uppercase text-secondary italic text-2xl md:mb-2">Whoa!</h1>
            <img className="hidden md:block mb-2" src="/imgs/woah.jpg" alt="surprised man">
            <h2 className="uppercase text-accent italic text-lg">
                You're not going to believe what's inside!
            </h2>
        </div>
        <div>
            <h3 className="mb-4 sm:mb-8 text-accent text-xl">Join the... </h3>
            <img src="/imgs/super_power_club.png" alt="super power club" className="mb-2 sm:mb-8">
        </div>
         <div>
            <h4 className="uppercase text-accent">Limited Time Offer!</h4>
            <br className="mb-2"/>
            <p>For a Limited Time only you can join the 
             <span className="uppercase text-primary italic font-bold [text-shadow:-1px_0.5px_#f4290f]">
                    Super Power Club
             </span> by correctly answering the following Nintendo triva question!
            </p>
            <br className="mb-2"/>
            <form id="year_form" className="form-control" action="/join-super-power-club" method="post">
                <label className="mb-2 md:mb-6" htmlFor="year"><span>In what year was </span>
                    <img src='/imgs/nintendo_power.png' className="w-24 inline-block" 
                        alt='Nintendo Power'>
                <span> magazine discontinued?</span>
                </label>
                <input className="mb-2 input input-bordered md:self-center md:mb-6" type="number" name="year" id="year" 
                    required>  
                <button className="btn btn-secondary md:self-center" type="submit">
                    Join the Super Power Club!
                </button>
            </form>
         </div>   
            
    
    </div>
</main>

<% include('partials/_bottom') %></header> */}