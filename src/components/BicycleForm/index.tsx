import { useFormik } from 'formik';
import { validationSchema } from 'src/validation/Validation';
import './styles.scss';

export default function BicycleForm() {
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
    onSubmit: (values) => {
      // TODO
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
    <input type="text" placeholder="Color" {...formik.getFieldProps('color')} />
    {formik.touched.color && formik.errors.color && <div className="error">{formik.errors.color}</div>}
  </div>

  <div className="form-group">
    <input type="text" placeholder="Wheel size" {...formik.getFieldProps('wheelSize')} />
    {formik.touched.wheelSize && formik.errors.wheelSize && <div className="error">{formik.errors.wheelSize}</div>}
  </div>

  <div className="form-group">
    <input type="text" placeholder="Price" {...formik.getFieldProps('price')} />
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
