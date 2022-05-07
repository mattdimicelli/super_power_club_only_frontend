import AvatarImg from './AvatarImg';
import { Field } from 'formik';

function SignupAvatar({char}) {
    return (
      <label className="avatar rounded hover:opacity-50">
        <Field
          type="radio"
          name="avatar"
          value={char}
          className="absolute opacity-0 w-0 h-0"
        />
        <AvatarImg avatar={char} />
      </label>
    );
}

export default SignupAvatar;