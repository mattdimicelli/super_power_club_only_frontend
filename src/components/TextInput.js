import {useField} from 'formik';

function TextInput({ label, ...props }) {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)

   const [field, meta] = useField(props);
   let labelEl;
   if (meta.touched && meta.error) {
       labelEl = 
       <label className="label text-sm text-error-content bg-error" htmlFor={props.id || props.name}>{label}</label>;
   } else {
       labelEl = 
       <label className="label text-sm" htmlFor={props.id || props.name}>{label}</label>;
   }
    return (
        <>
        {labelEl}
        <input className="input input-bordered input-sm  mb-2" {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="text-error">{meta.error}</div>
        ): null}
        </>
    );
};

export default TextInput;