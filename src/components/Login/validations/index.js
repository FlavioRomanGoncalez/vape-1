import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().required("Requerido"),
  password: Yup.string().required("Requerido"),
});
