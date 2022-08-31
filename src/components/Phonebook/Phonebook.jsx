import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import styled from '@emotion/styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(6).required(),
});

const id = nanoid();

const FormField = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid black;
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

const Button = styled.button`
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: black;
  background-color: white;
  border-color: grey;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
  min-width: 200px;
  height: 50px;
  margin-top: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 10px 32px;
`;

const Phonebook = ({ onSubmit }) => {
  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    console.log(values);
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormField>
        <Label htmlFor="Name">
          Name
          <Input
            type="text"
            name="name"
            id={id}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <TextMessage name="name" component="div" />
        </Label>
        <Label htmlFor="Number">
          Number
          <Input
            type="tel"
            name="number"
            id={id}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <TextMessage name="number" component="div" />
        </Label>
        <Button type="submit">Add contacts</Button>
      </FormField>
    </Formik>
  );
};

export default Phonebook;
