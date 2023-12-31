import { useFormik } from 'formik';
import { validationSchema } from 'src/validation/Validation';
import './styles.scss';
import { useAddBicycleMutation } from '../../redux/services/bicycleApi';
import { useState } from 'react';
import { BicycleType } from 'src/types/enumBicycle';
import { ApiError } from 'src/types/Stat';

export default function BicycleForm() {

  const [addBicycle] = useAddBicycleMutation();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
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
        setSuccessMessage('');
        setErrorMessage('');
    try {
      const formattedValues = {
        ...values,
        wheelSize: Number(values.wheelSize),
        price: Number(values.price),
      };

      await addBicycle(formattedValues).unwrap();
      setSuccessMessage('Bicycle added successfully!');
      formik.resetForm();

    } catch (error) {
      const e = error as ApiError;
      if (e.status === 409) {

        setErrorMessage('A bicycle with this ID already exists.');
      } else {
        console.error('error', error);
        setSuccessMessage('');
      }
    }
  },
    
  });
    const handleReset = () => {
    formik.resetForm();
      setSuccessMessage('');
      setErrorMessage('');
  };

  return (
<form onSubmit={formik.handleSubmit}>
  <div className="form-group">
    <input type="text" placeholder="Name" {...formik.getFieldProps('name')} />
    {formik.touched.name && formik.errors.name && <div className="error">{formik.errors.name}</div>}
  </div>
      
<div className="form-group">
  <select
    {...formik.getFieldProps('type')}
  >
    <option value="" disabled hidden>
      Choose a type
    </option>
    {Object.values(BicycleType).map((type) => (
      <option key={type} value={type}>
        {type}
      </option>
    ))}
  </select>
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

  <div className="form-group text-area">
    <textarea placeholder="Description" {...formik.getFieldProps('description')} />
    {formik.touched.description && formik.errors.description && <div className="error">{formik.errors.description}</div>}
  </div>

  <div className="form-group actions">
    <button type="submit">SAVE</button>
    <button type="button" onClick={handleReset}>CLEAR</button>
      </div>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
</form>

  );
};
