import Header from './components/Header';
import Post from './components/Post';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import SuperPowerClub from './components/SuperPowerClub';

function App() {
  return (
    <div className="bg-base-200 min-h-screen">



<% posts.map(post => { 
    let avatarImgUrl;
    if (post.author.avatar === 'kirby') {
        avatarImgUrl = `/imgs/${post.author.avatar}.jpg`;
    }
    else {
        avatarImgUrl = `/imgs/${post.author.avatar}.png`;
    }
                                                            %>
    <div class="flex justify-center p-4">
        <article class="text-center sm:text-left bg-base-100 max-w-2xl flex-1 flex 
            flex-col-reverse items-center sm:flex-row sm:justify-between px-4 py-4 rounded-2xl 
            border-accent border border-solid">
                <% if (user?.admin) { %>
                
                <form action="/posts/delete/<%- post.id %>" method="post">
                    <button type="submit" class="btn btn-accent self-end">Delete</button>
                </form>
                
                <% } %>
                <div class="avatar justify-center self-center w-40 mb-2 shrink-0 sm:h-20">
                    <div class="rounded">
                        <img src="<%- avatarImgUrl %>" alt="<%= post.author.avatar %>">
                    </div>
                </div>
                <section>
                    <h2 class="font-bold mb-2 text-primary-content"><%= post.title %></h2>
                    <p><%= post.body %></p>
                    <div class="divider"></div>
                    <% if (user?.member) { %>
                    <div class="text-sm sm:text-base">Posted by <%= post.author.fullName %></div>
                    <div class="mb-2 text-sm sm:text-base"><%= post.timestamp.toLocaleString() %></div>
                    <% } else { %>
                        
                    <div class="text-sm sm:text-base mb-2">Join the <span class="uppercase text-primary 
                        italic font-bold [text-shadow:-1px_0.5px_#f4290f]">Super Power Club</span>
                        <span> to see who posted and when!</span>
                    </div>
                    <% } %>
                        
                </section>
        </article>
    </div>
<% }); %>
      
    </div>
  );
}

export default App;
