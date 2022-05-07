import SignupAvatar from "./SignupAvatar";
import uniqid from 'uniqid';
import mario from "../images/mario.png";
import { Formik } from 'formik';
import TextInput from './TextInput';



function signupModal() {
  const avatarsBesidesMario = [
    "luigi",
    "peach",
    "dk",
    "yoshi",
    "kirby",
    "bowser",
    "fox",
    "link",
    "samus",
  ].map((char) => <SignupAvatar key={uniqid()} char={char} />);
  return (
    <>

    <input type="checkbox" id="sign-up-modal" className="modal-toggle" />
    <div className="modal flex-col">
      <div className="modal-box">
        <label htmlFor="sign-up-modal" className="btn btn-sm btn-circle absolute right-2 top-2 modal-button">
          ✕
        </label>
        <Formik
          initialValues={{
            signup_first_name: '',
            signup_last_name: '',
            signup_email: '',
            signup_password: '',
            signup_password_confirm: '',
          }}
        >
          <form id="signup_form" className="form-control" action="/signup" method="post">
            <TextInput label="First name:" name="signup_first_name" type="text" placeholder="First name" />
            <TextInput label="Last name:" name="signup_last_name" type="text" placeholder="Last name" />
            <TextInput label="Email address:" name="signup_email" placeholder="Email address" />
            <TextInput label="Password:" name="signup_password" type="password" placeholder="Password" />
            <TextInput label="Confirm password:" name="signup_password_confirm" type="password" placeholder="Confirm password" />
            <fieldset className="mb-10 text-center">
              <legend className="label text-sm ">Choose an avatar:</legend>
              <label className="avatar rounded hover:opacity-50">
                <input type="radio" name="avatar" value="mario" className="absolute opacity-0 w-0 h-0" checked />
                <img src={mario} alt="mario" />
              </label>
              {avatarsBesidesMario}
            </fieldset>
            <fieldset className="form-control">
              <legend className="mb-2">Invited to be an admin?</legend>
              <div>
                <label className="cursor-pointer label w-20">
                  <span className="label-text">Yes</span>
                  <input type="radio" className="radio" name="admin" value="true" id="yes_input" />
                </label>
              
                <label className="cursor-pointer label w-20 mb-2">
                  <span className="label-text">No</span>
                  <input type="radio" className="radio" name="admin" value="false" id="no_input" checked />
                </label>
                <label className="code-label" hidden>
                  <div className="label-text mb-2">Enter the admin privilege code:</div>
                    
                  <input type="text" name="code" id="code" className="input input-bordered" />
                </label>
              </div>
            </fieldset>
            <div className="modal-action">
              <button type="submit" className="btn btn-secondary">Register for Basic Access</button>
            </div>
          </form>
          </Formik>
      </div>
    </div>
    </>
  );
}

export default signupModal;

// <% if (errors) { %>
//     <input type="checkbox" id="sign-up-modal" className="modal-toggle" checked>
//     <% } else { %>
//     <input type="checkbox" id="sign-up-modal" className="modal-toggle" >
//     <% } %>
    
//     <div className="modal flex-col">
//     <div className="modal-box">
    
//     <% if (errors) { %>
//     <form action="/clear-errors" method="post">
//       <button className="btn btn-sm btn-circle absolute right-2 top-2" type="submit">✕</button>
//     </form>
//     <h1 className="text-error-content bg-error text-lg mb-2">Signup Unsuccessful</h1>
//     <% } else { %>
//     <label htmlFor="sign-up-modal" className="btn btn-sm btn-circle absolute right-2 top-2 modal-button">
//       ✕
//     </label>
//     <% } %>
    
//     <form id="signup_form" className="form-control" action="/signup" method="post">
    
//       <% if (errors?.firstName) { %>
//       <label className="label text-sm  text-error-content bg-error" htmlFor="signup-first-name">
//         <%- errors.firstName.message %>
//       </label>
//       <input className="input input-bordered input-sm  mb-2" type="text" 
//         id="signup-first-name" placeholder="First name" name="signup_first_name">
//       <% } else { %>
//       <label className="label text-sm " htmlFor="signup-first-name">First name:</label>
//       <input className="input input-bordered input-sm  mb-2" type="text" 
//         id="signup-first-name" placeholder="First name" name="signup_first_name">
//       <% } %>
//       <% if (errors?.lastName) { %>
//       <label className="label text-sm  text-error-content bg-error" htmlFor="signup-last-name">
//         <%- errors.lastName.message %>
//       </label>
//       <input className="input input-bordered input-sm  mb-2" type="text" 
//           id="signup-last-name" placeholder="Last name" name="signup_last_name">
//       <% } else { %>
//       <label className="label text-sm " htmlFor="signup-last-name">Last name:</label>
//       <input className="input input-bordered input-sm  mb-2" type="text" 
//         id="signup-last-name" placeholder="Last name" name="signup_last_name">
//       <% } %>
//       <% if (errors?.email) { %>
//       <label className="label text-sm  text-error-content bg-error" htmlFor="signup-email">
//         <%- errors.email.message %>
//       </label>
//       <input className="input input-bordered input-sm  mb-2" type="text" id="signup-email" 
//           placeholder="Email address" name="signup_email">
          
//       <% } else { %>
          
//       <label className="label text-sm " htmlFor="signup-email">Email address:</label>
//       <input className="input input-bordered input-sm  mb-2" type="text" id="signup-email" 
//         placeholder="Email address" name="signup_email">
//       <% } %>
//       <% if (errors?.password) { %>
//       <label className="label text-sm  text-error-content bg-error" htmlFor="signup-password">
//         <%- errors.password %>
//       </label>
//       <input className="input input-bordered input-sm  mb-2" type="password" 
//         id="signup-password" placeholder="Password" name="signup_password">
//       <% } else { %>
//       <label className="label text-sm " htmlFor="signup-password">Password:</label>
//       <input className="input input-bordered input-sm  mb-2" type="password" 
//         id="signup-password" placeholder="Password" name="signup_password">
//       <% } %>
//       <% if (errors?.passwordConfirmation) { %>
//       <label className="label text-sm  text-error-content bg-error" 
//         htmlFor="signup-password-confirm">
//         <%- errors.passwordConfirmation %>
//       </label>
//       <input className="input input-bordered input-sm  mb-10" type="password" 
//       id="signup-password-confirm" placeholder="Confirm password" name="signup_password_confirm">
      
//       <% } else { %>
//       <label className="label text-sm " htmlFor="signup-password-confirm">Confirm password:</label>
//       <input className="input input-bordered input-sm  mb-10" type="password" 
//       id="signup-password-confirm" placeholder="Confirm password" name="signup_password_confirm">
//       <% } %>
//       <fieldset className="mb-10 text-center">
//         <% if (errors?.avatar) { %>
          
//         <legend className="label text-sm text-error-content bg-error">
//           <%= errors.avatar %>
//         </legend>
//         <% } else { %>
//         <legend className="label text-sm ">Choose an avatar:</legend>
//         <% } %>
//         <label className="avatar rounded hover:opacity-50">
//           <input type="radio" name="avatar" value="mario" className="absolute opacity-0 w-0 h-0" checked>
//           <img src="/imgs/mario.png" alt="mario">
//         </label>
//         <label className="avatar rounded hover:opacity-50">
//           <input type="radio" name="avatar" value="luigi" className="absolute opacity-0 w-0 h-0">
//           <img src="/imgs/luigi.png" alt="luigi">
//         </label>
//         <label className="avatar rounded hover:opacity-50">
//           <input type="radio" name="avatar" value="peach" className="absolute opacity-0 w-0 h-0">
//           <img src="/imgs/peach.png" alt="peach">
//         </label>
//         <label className="avatar rounded hover:opacity-50">
//           <input type="radio" name="avatar" value="dk" className="absolute opacity-0 w-0 h-0">
//             <img src="/imgs/dk.png" alt="donkey kong">
//         </label>
//         <label className="avatar rounded hover:opacity-50">
//           <input type="radio" name="avatar" value="yoshi" className="absolute opacity-0 w-0 h-0">
//           <img src="/imgs/yoshi.png" alt="yoshi">
//         </label>
//         <label className="avatar rounded hover:opacity-50">
//           <input type="radio" name="avatar" value="kirby" className="absolute opacity-0 w-0 h-0">
//           <img src="/imgs/kirby.jpg" alt="kirby">
//         </label>
//         <label className="avatar rounded hover:opacity-50">
//           <input type="radio" name="avatar" value="bowser" className="absolute opacity-0 w-0 h-0">
//           <img src="/imgs/bowser.png" alt="bowser">
//         </label>
//         <label className="avatar rounded hover:opacity-50">
//           <input type="radio" name="avatar" value="fox" className="absolute opacity-0 w-0 h-0">
//           <img src="/imgs/fox.png" alt="Fox McCloud">
//         </label>
//         <label className="avatar rounded hover:opacity-50">
//           <input type="radio" name="avatar" value="link" className="absolute opacity-0 w-0 h-0">
//           <img src="/imgs/link.png" alt="Link from Zelda">
//         </label>
//         <label className="avatar rounded hover:opacity-50">
//           <input type="radio" name="avatar" value="samus" className="absolute opacity-0 w-0 h-0">
//           <img src="/imgs/samus.png" alt="Samus">
//         </label>
//       </fieldset>
//       <fieldset className="form-control">
//         <legend className="mb-2">Invited to be an admin?</legend>
//         <div>
//           <label className="cursor-pointer label w-20">
//             <span className="label-text">Yes</span>
//             <input type="radio" className="radio" name="admin" value="true" id="yes_input">
//           </label>
      
//           <label className="cursor-pointer label w-20 mb-2">
//             <span className="label-text">No</span>
//             <input type="radio" className="radio" name="admin" value="false" id="no_input" checked>
//           </label>
          
//           <% if (errors?.code) { %>
            
//           <label className="code-label">
//             <div className="label-text mb-2 text-error-content bg-error">
//               Incorrect admin privilege code:
//             </div>
//           <% } else { %>
//           <label className="code-label" hidden>
//             <div className="label-text mb-2">Enter the admin privilege code:</div>
//           <% } %>
            
//             <input type="text" name="code" id="code" className="input input-bordered">
//           </label>
//         </div>
//       </fieldset>
//       <div className="modal-action">
//         <button type="submit" className="btn btn-secondary">Register for Basic Access</button>
//       </div>
//     </form>
//     <script src="https://unpkg.com/validator@latest/validator.min.js" nonce="rabbledabbledoodoo22" defer></script>
//     <script nonce="woogyboogydoogy55" type="module">
//       const validate = new window.JustValidate('#signup_form');
//       validate
//         .addField('#signup-first-name', [
//           {
//             rule: 'required',
//             errorMessage: 'First name is required',
//           },
//           {
//             validator: (value) => validator.isAlpha(value, 'en-US', {ignore: ' '}),
//             errorMessage: 'Names must be letters and spaces only',
//           },
//           {
//             validator: (value) => value.trim().length >= 1,
//             errorMessage: 'Must be at least one char',
//           },
//         ])
//         .addField('#signup-last-name', [
//           {
//             rule: 'required',
//             errorMessage: 'Last name is required',
//           },
//           {
//             validator: (value) => validator.isAlpha(value, 'en-US', {ignore: ' '}),
//             errorMessage: 'Names must be letters and spaces only',
//           },
//           {
//             validator: (value) => value.trim().length >= 1,
//             errorMessage: 'Must be at least one char',
//           },
//         ])
//         .addField('#signup-email', [
//           {
//             rule: 'required',
//             errorMessage: 'Email address is required',
//           },
//           {
//             rule: 'email',
//             errorMessage: 'Must be a valid email address',
//           },
//         ])
//         .addField('#signup-password', [
//           {
//             rule: 'strongPassword',
//           },
//           {
//             rule: 'required',
//             errorMessage: 'Password is required',
//           },
//         ])
//         .addField('#signup-password-confirm', [
//           {
//             validator: (value, fields) => {
//               if (fields['#signup-password'] && fields['#signup-password-confirm'].elem) {
//                 const repeatPasswordValue = fields['#signup-password'].elem.value;
//                 return value === repeatPasswordValue;
//               }
//               return true;
//             },
//             errorMessage: 'Passwords must match',
//           },
//           {
//             rule: 'required',
//             errorMessage: 'Password confirmation is required'
//           },
//         ])
//         .addField('#code', [
//           {
//             validator: (value, fields) => {
//               if (fields['#code'].elem.parentElement.hidden === false) {
//                 return value === 'NTDOY';
//               }
//               return true;
//             },
//             errorMessage: 'Incorrect admin privilege code',
//           },
//         ])
//         .onSuccess((e) =>   e.target.submit());
//     </script>
//     </div>
//     </div>