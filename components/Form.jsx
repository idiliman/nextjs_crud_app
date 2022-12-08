import UpdateUserForm from "./UpdateUserForm";
import AddUserForm from "./AddUserForm";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  // UpdateAction
  const formId = useSelector((state) => state.app.client.formId);

  return (
    <div className="container mx-auto py-6">
      {formId
        ? UpdateUserForm({ formId, formData, setFormData })
        : AddUserForm({ formData, setFormData, formId })}
    </div>
  );
}
