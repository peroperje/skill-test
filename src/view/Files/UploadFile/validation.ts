import * as yup from 'yup';
import { files } from '../../../utils/validation/validationDefinition';

const validationSchema = yup.object().shape({ files });

export default validationSchema;
