import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from '@emotion/styled';

const schema = yup.object({
  filter: yup.string(),
});

const initialValues = {
  filter: '',
};

const FormField = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = styled(Field)`
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  width: 100%;
  height: 40px;
  color: black;
  margin-bottom: 10px;
  border-color: grey;

  &:focus {
    outline: none;
    border-color: #719ece;
    box-shadow: 0 0 10px #719ece;
  }
`;

const Label = styled.label`
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const TextMessage = styled(ErrorMessage)`
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  color: red;
`;

const Filter = ({ onChange }) => {
  const onFormSubmit = (values, { resetForm }) => {
    console.log(values);
    onChange(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={schema}
    >
      <FormField>
        <Label>
          Find contacts by name
          <Input type="text" name="filter" placeholder="Search" />
          <TextMessage name="filter" component="div" />
        </Label>
      </FormField>
    </Formik>
  );
};

// Contacts.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Filter;
