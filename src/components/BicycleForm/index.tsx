import { useFormik } from 'formik';
import { validationSchema } from 'src/validation/Validation';
import './styles.scss';
import { useAddBicycleMutation } from '../../redux/services/bicycleApi';

export default function BicycleForm() {

  const [addBicycle] = useAddBicycleMutation();
  
  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      color: '',
      wheelSize: '',
      price: '',
      id: '',
      description: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
  try {
    const formattedValues = {
      ...values,
      wheelSize: Number(values.wheelSize),
      price: Number(values.price),
    };

    const response = await addBicycle(formattedValues).unwrap();
    console.log('added', response);
    formik.resetForm();
  } catch (error) {
    console.error('error', error);
  }
    },
  });

  return (
<form onSubmit={formik.handleSubmit}>
  <div className="form-group">
    <input type="text" placeholder="Name" {...formik.getFieldProps('name')} />
    {formik.touched.name && formik.errors.name && <div className="error">{formik.errors.name}</div>}
  </div>
  
  <div className="form-group">
    <input type="text" placeholder="Type" {...formik.getFieldProps('type')} />
    {formik.touched.type && formik.errors.type && <div className="error">{formik.errors.type}</div>}
  </div>

<div className="form-group">
  <select {...formik.getFieldProps('color')}>
    <option value="" disabled>Choose a color</option>
    <option value="Red">Red</option>
    <option value="Green">Green</option>
    <option value="Blue">Blue</option>
    <option value="Black">Black</option>
    <option value="White">White</option>
  </select>
  {formik.touched.color && formik.errors.color && <div className="error">{formik.errors.color}</div>}
</div>


  <div className="form-group">
    <input type="number" placeholder="Wheel size" {...formik.getFieldProps('wheelSize')} />
    {formik.touched.wheelSize && formik.errors.wheelSize && <div className="error">{formik.errors.wheelSize}</div>}
  </div>

  <div className="form-group">
    <input type="number" placeholder="Price" {...formik.getFieldProps('price')} />
    {formik.touched.price && formik.errors.price && <div className="error">{formik.errors.price}</div>}
  </div>

  <div className="form-group">
    <input type="text" placeholder="ID (slug): XXXXXXXXXXXXX" {...formik.getFieldProps('id')} />
    {formik.touched.id && formik.errors.id && <div className="error">{formik.errors.id}</div>}
  </div>

  <div className="form-group">
    <textarea placeholder="Description" {...formik.getFieldProps('description')} />
    {formik.touched.description && formik.errors.description && <div className="error">{formik.errors.description}</div>}
  </div>

  <div className="form-group actions">
    <button type="submit">SAVE</button>
    <button type="button" onClick={formik.handleReset}>CLEAR</button>
  </div>
</form>

  );
};
