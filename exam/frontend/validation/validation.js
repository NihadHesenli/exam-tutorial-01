import * as Yup from 'yup';

export const ProdSchema = Yup.object().shape({
    image : Yup.string().url('enter valid url').required('fill the input'),
    title : Yup.string().min(5,'min 5 character').max(13,'max 13 character').required('fill the input'),
    description : Yup.string().min(20,'min 20 character').max(50,'max 50 character').required('fill the input'),
    price : Yup.number().min(1,'more than 1').max(500,'max 500 dollar').required('fill the input'),
})
