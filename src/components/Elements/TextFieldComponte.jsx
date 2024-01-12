/* eslint-disable react/prop-types */

// MATERIAL UI
import { TextField } from "@mui/material";

export default function TextFieldComponet({
  name,
  type,
  label,
  formik,
  variant,
  className,
  placeholder,
}) {
  return (
    <>
      <TextField
        type={type}
        label={label}
        value={formik.values[name]}
        error={formik.touched[name] && !!formik.errors[name]}
        variant={variant}
        className={className}
        helperText={formik.touched[name] && !!formik.errors[name]}
        placeholder={placeholder}
        handleChange={formik.handleChange}
      />
    </>
  );
}
