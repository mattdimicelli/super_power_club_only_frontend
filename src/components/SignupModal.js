import SignupAvatar from "./SignupAvatar";
import uniqid from 'uniqid';
import mario from "../images/mario.png";
import { Formik, Form, Field } from 'formik';
import TextInput from './TextInput';
import * as Yup from 'yup';
import validator from 'validator';
import { useRef } from 'react';

function SignupModal() {
  const hiddenLabelRef = useRef(null);

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


  Yup.addMethod(Yup.string, 'isAlpha', function() {
    const failureMessage = 'Must be letters and spaces only';
    return this.test('isAlpha', failureMessage, function(value) {
      return validator.isAlpha(value, 'en-US', {ignore: ' '}) ? true : this.createError({
        path: this.path,
        message: failureMessage,
      })
    });
  });

  Yup.addMethod(Yup.string, 'isMin1CharTrimmed', function() {
    const failureMessage = 'Must be at least one char';
    return this.test('isMin1CharTrimmed', failureMessage, function(value) {
      return value.trim().length >= 1 ? true : this.createError({
        path: this.path,
        message: failureMessage,
      })
    });
  });

  Yup.addMethod(Yup.string, 'isStrongPassword', function() {
    const failureMessage = 'Must be 8 chars minimum & have at least 1 each of lowercase, uppercase, number & symbol chars';
    return this.test('isStrongPassword', failureMessage, function(value) {

      return validator.isStrongPassword(value) ? true : this.createError({
        path: this.path,
        message: failureMessage,
      })
    });
  });

  Yup.addMethod(Yup.string, 'isCorrectAdminCode', function() {
    const failureMessage = 'Incorrect admin privilege code';
    return this.test('isCorrectAdminCode', failureMessage, function(value) {
      if (hiddenLabelRef.current.hidden === false) {
        if (value === 'NTDOY') { return true }
        else return this.createError({
          path: this.path,
          message: failureMessage
        })
      }
      return true; //admin code does not need to be evaluated if the user was 
      //not invited to be an admin, so just have the validation pass so that
      // it doesn't cause issues
    });
  });

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
            avatar: '',
            admin: '',
            code: ''
          }}
          validationSchema={Yup.object({
             /* Formik has a bug that changes "" to undefined before passing the value to the
              Yup validationSchema.  default('') and defined() change the undefined back to a 
              "" before validation */
            signup_first_name: Yup.string()
              .default('')
              .defined()
              .isAlpha()
              .isMin1CharTrimmed()
              .required('First name is required'),
            signup_last_name: Yup.string()
              .default('')
              .defined()
              .isAlpha()
              .isMin1CharTrimmed()
              .required('Last name is required'),
            signup_email: Yup.string()
              .default('')
              .defined()
              .email()
              .required('Email address is required'),
            signup_password: Yup.string()
              .default('')
              .defined()
              .isStrongPassword()
              .required('Password is required'),
            signup_password_confirm: Yup.string()
              .default('')
              .defined()
              .oneOf([Yup.ref('signup_password'), null], 'Passwords must match')
              .required('Password confirmation is required'),
            code: Yup.string()
              .default('')
              .defined()
              .isCorrectAdminCode()
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log('submitting')
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form id="signup_form" className="form-control" action="/signup" method="post">
            <TextInput label="First name:" name="signup_first_name" type="text" placeholder="First name" />
            <TextInput label="Last name:" name="signup_last_name" type="text" placeholder="Last name" />
            <TextInput label="Email address:" name="signup_email" placeholder="Email address" />
            <TextInput label="Password:" name="signup_password" type="password" placeholder="Password" />
            <TextInput label="Confirm password:" name="signup_password_confirm" type="password" placeholder="Confirm password" />
            <fieldset className="mb-10 text-center">
              <legend className="label text-sm ">Choose an avatar:</legend>
              <label className="avatar rounded hover:opacity-50">
                <Field type="radio" name="avatar" value="mario" className="absolute opacity-0 w-0 h-0" checked />
                <img src={mario} alt="mario" />
              </label>
              {avatarsBesidesMario}
            </fieldset>
            <fieldset className="form-control">
              <legend className="mb-2">Invited to be an admin?</legend>
              <div>
                <label className="cursor-pointer label w-20">
                  <span className="label-text">Yes</span>
                  <Field type="radio" className="radio" name="admin" value="true" />
                </label>
              
                <label className="cursor-pointer label w-20 mb-2">
                  <span className="label-text">No</span>
                  <input type="radio" className="radio" name="admin" value="false" checked />
                </label>
                <label className="code-label" hidden ref={hiddenLabelRef}>
                  <div className="label-text mb-2">Enter the admin privilege code:</div>
                    
                  <Field type="text" name="code" id="code" className="input input-bordered" />
                </label>
              </div>
            </fieldset>
            <div className="modal-action">
              <button type="submit" className="btn btn-secondary">Register for Basic Access</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
    </>
  );
}

export default SignupModal;
