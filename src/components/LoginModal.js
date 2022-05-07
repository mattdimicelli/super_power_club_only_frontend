function LoginModal() {
  return (
    <>
      <input type="checkbox" id="log-in-modal" className="modal-toggle" />
      <div className="modal flex-col">
        <div className="modal-box">
          <label htmlFor="log-in-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form className="form-control" action="/login" method="post">
            <label className="label text-sm md:text-base" htmlFor="login-email">Email:</label>
            <input className="input-bordered input-sm md:input-md input mb-2" type="text" id="login-email" 
            placeholder="Email address" name="login_email"></input>
            <label className="label text-sm md:text-base" htmlFor="login-password">Password:</label>
            <input className="input-bordered input-sm md:input-md input mb-2" type="password" 
            id="login-password" placeholder="Password" name="login_password" />
            <div className="modal-action">
              <button type="submit" className="btn btn-secondary">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}










//     <% if ((locals.sessionMessages?.[locals.sessionMessages.length - 1] === 'User not found')
//     || 
//         (locals.sessionMessages?.[locals.sessionMessages.length - 1] === 'Invalid password')
//     ||
//         (message.length > 0))  
//   /* This would be a "not logged in" message */ 
//   { %>
//   <input type="checkbox" id="log-in-modal" className="modal-toggle" checked>
//   <% } else { %>
//   <input type="checkbox" id="log-in-modal" className="modal-toggle">
//   <% } %>



//   <div className="modal flex-col">
//     <div className="modal-box">
//     <%  if (
//             (locals.sessionMessages?.[locals.sessionMessages.length - 1] === 'User not found')
//           || 
//             (locals.sessionMessages?.[locals.sessionMessages.length - 1] === 'Invalid password') 
//           ) { %>
//       <form action="/clear-messages" method="post">
//         <button type="submit" htmlFor="log-in-modal" 
//           className="btn btn-sm btn-circle absolute right-2 top-2">✕
//         </button>
//       </form>
//       <h1 className="text-error-content bg-error text-lg mb-2">Last Login Unsuccessful</h1>
//     <% } else if (message.length > 0)
//     /* This would be a "not logged in" message */ { %>
    
//       <form action="/clear-messages" method="post">
//           <button type="submit" htmlFor="log-in-modal" 
//               className="btn btn-sm btn-circle absolute right-2 top-2">✕
//           </button>
//       </form>
//     <% } else { %>
//       <label htmlFor="log-in-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//     <% } %>
//     <form className="form-control" action="/login" method="post">
//       <% if (locals.sessionMessages?.[locals.sessionMessages.length - 1] === 'User not found') {%>
//       <label className="label text-sm md:text-base text-error-content bg-error" htmlFor="login-email">
//         Email not found
//       </label>
//       <% } else { %>
//       <label className="label text-sm md:text-base" htmlFor="login-email">Email:</label>
//       <% } %>
//       <input className="input-bordered input-sm md:input-md input mb-2" type="text" id="login-email" 
//         placeholder="Email address" name="login_email">
//       <% if(locals.sessionMessages?.[locals.sessionMessages.length - 1] === 'Invalid password') {%>
//       <label className="label text-sm md:text-base text-error-content bg-error" htmlFor="login-password">
//         Incorrect password
//       </label>
//       <% } else { %>
//         <label className="label text-sm md:text-base" htmlFor="login-password">Password:</label>
        
//       <% } %>
//       <input className="input-bordered input-sm md:input-md input mb-2" type="password" 
//         id="login-password" placeholder="Password" name="login_password">
//       <div className="modal-action">
//         <button type="submit" className="btn btn-secondary">Log In</button>
//       </div>
//     </form>
    
//     </div>
//   </div>
//   )
// }

export default LoginModal;

