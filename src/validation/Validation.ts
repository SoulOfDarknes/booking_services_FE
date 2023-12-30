import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string().min(5, 'Name must be at least 5 characters long').required('Name is required'),
    type: Yup.string().min(5, 'Type must be at least 5 characters long').required('Type is required'),
    color: Yup.string().min(5, 'Color must be at least 5 characters long').required('Color is required'),
    wheelSize: Yup.number().positive('Wheel size must be a positive number').required('Wheel size is required'),
    price: Yup.number().positive('Price must be a positive number').required('Price is required'),
    description: Yup.string().min(5, 'Description must be at least 5 characters long').required('Description is required'),
    id: Yup.string().required('ID is required'),
});