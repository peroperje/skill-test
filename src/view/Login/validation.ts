import * as yup from 'yup';
import { email, password } from '../../utils/validation/validationDefinition';

const loginFormSchema = yup.object().shape({
  email,
  password
});

export default loginFormSchema;
