import axios from "axios";
import "./Form.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object().shape({
  to: Yup.string().required("To field is required"),
  method: Yup.string().required("Method field is required"),
  sendAt: Yup.date()
    .required("Send at date is required")
    .min(new Date(), "Send at date must be in the future"),
  content: Yup.string().required("Content field is required"),
});

function Form() {
  const url = "https://localhost:7075/api/Reminders";

  const formik = useFormik({
    initialValues: {
      to: "",
      method: "email",
      sendAt: "",
      content: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = {
        to: values.to,
        method: values.method,
        sendAt: new Date(values.sendAt).toISOString(),
        content: values.content,
      };
      const isSuccess = true; // Change this based on your actual submission logic

      if (isSuccess) {
        axios.post(url, formData).then((response) => {
          toast.success("Message sent successfully");
          console.log(response);
        });
      } else {
        toast.error("Message sending failed");
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1 className="header">Message schedule app</h1>
        <div className="form-group">
          <label>To</label>
          <div>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.to}
              id="to"
              type="text"
              className="input"
              name="to"
              placeholder="Email or Telegram Id"
              autoComplete="off"
            />
            {formik.touched.to && formik.errors.to ? (
              <div className="error">{formik.errors.to}</div>
            ) : null}
          </div>
        </div>
        <div className="form-group">
          <label>Method</label>
          <div>
            <select
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.method}
              id="method"
              name="method"
              className="input"
            >
              <option value="email">Email</option>
              <option value="telegram">Telegram</option>
            </select>
            {formik.touched.method && formik.errors.method ? (
              <div className="error">{formik.errors.method}</div>
            ) : null}
          </div>
        </div>
        <div className="form-group">
          <label>Send at date</label>
          <div>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.sendAt}
              id="sendAt"
              type="datetime-local"
              name="sendAt"
              className="input"
            />
            {formik.touched.sendAt && formik.errors.sendAt ? (
              <div className="error">{formik.errors.sendAt}</div>
            ) : null}
          </div>
        </div>
        <div className="form-group">
          <label>Content</label>
          <div>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.content}
              id="content"
              type="text"
              className="input"
              name="content"
              placeholder="Content"
              autoComplete="off"
            />
            {formik.touched.content && formik.errors.content ? (
              <div className="error">{formik.errors.content}</div>
            ) : null}
          </div>
        </div>
        <button className="ui-btn">
          <span>Send it</span>
        </button>
      </form>
    </div>
  );
}

export default Form;
