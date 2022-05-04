<% if ((locals.sessionMessages?.[locals.sessionMessages.length - 1] === 'User not found')
  || 
      (locals.sessionMessages?.[locals.sessionMessages.length - 1] === 'Invalid password')
  ||
      (message.length > 0))  
/* This would be a "not logged in" message */ 
{ %>
<input type="checkbox" id="log-in-modal" class="modal-toggle" checked>
<% } else { %>
<input type="checkbox" id="log-in-modal" class="modal-toggle">
<% } %>
<div class="modal flex-col">
  <div class="modal-box">
  <%  if (
          (locals.sessionMessages?.[locals.sessionMessages.length - 1] === 'User not found')
        || 
          (locals.sessionMessages?.[locals.sessionMessages.length - 1] === 'Invalid password') 
        ) { %>
    <form action="/clear-messages" method="post">
      <button type="submit" for="log-in-modal" 
        class="btn btn-sm btn-circle absolute right-2 top-2">✕
      </button>
    </form>
    <h1 class="text-error-content bg-error text-lg mb-2">Last Login Unsuccessful</h1>
  <% } else if (message.length > 0)
  /* This would be a "not logged in" message */ { %>
  
    <form action="/clear-messages" method="post">
        <button type="submit" for="log-in-modal" 
            class="btn btn-sm btn-circle absolute right-2 top-2">✕
        </button>
    </form>
  <% } else { %>
    <label for="log-in-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <% } %>
  <form class="form-control" action="/login" method="post">
    <% if (locals.sessionMessages?.[locals.sessionMessages.length - 1] === 'User not found') {%>
    <label class="label text-sm md:text-base text-error-content bg-error" for="login-email">
      Email not found
    </label>
    <% } else { %>
    <label class="label text-sm md:text-base" for="login-email">Email:</label>
    <% } %>
    <input class="input-bordered input-sm md:input-md input mb-2" type="text" id="login-email" 
      placeholder="Email address" name="login_email">
    <% if(locals.sessionMessages?.[locals.sessionMessages.length - 1] === 'Invalid password') {%>
    <label class="label text-sm md:text-base text-error-content bg-error" for="login-password">
      Incorrect password
    </label>
    <% } else { %>
      <label class="label text-sm md:text-base" for="login-password">Password:</label>
      
    <% } %>
    <input class="input-bordered input-sm md:input-md input mb-2" type="password" 
      id="login-password" placeholder="Password" name="login_password">
    <div class="modal-action">
      <button type="submit" class="btn btn-secondary">Log In</button>
    </div>
  </form>
  
  </div>
</div>