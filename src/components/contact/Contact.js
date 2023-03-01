import InputField from './InputField';
import SubmissionMessage from '../workshops/SubmissionMessage';
import { useFormik } from 'formik';
import { useState } from 'react';
import basicSchema from '.';

function Contact({ handleSubmit, formpopup, workshopTitle }) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState([
    { name: 'firstName', label: 'Name', value: '' },
    { name: 'lastName', label: 'Last name', value: '' },
    { name: 'email', label: 'Email', value: '' },
    { name: 'subject', label: 'Subject', value: '' },
    { name: 'message', label: 'message', value: '' },
  ]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: formpopup ? 'Im interested i this Workshop!' : '',
      message: formpopup ? workshopTitle : '',
    },
    validationSchema: basicSchema,
    onSubmit: () => {
      handleSubmit();
    },
  });

  return (
    <div className="Contact">
      <div>
        {formpopup ? (
          ''
        ) : (
          <p>If you have any idea that you would like to add, please share with us.</p>
        )}
      </div>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <div>
          {formData &&
            formData.map((data, index) => (
              <InputField
                onBlure={formik.handleBlur}
                touched={formik.touched[data.name]}
                className={'input-error'}
                error={formik.errors}
                onChange={formik.handleChange}
                value={formik.values}
                id={data.name}
                key={index}
                type={data.name}
                label={data.label}
                formpopup={formpopup}
                workshopTitle={workshopTitle}
              ></InputField>
            ))}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submitted && <SubmissionMessage submitted={submitted} setSubmitted={setSubmitted} />}
    </div>
  );
}

export default Contact;
