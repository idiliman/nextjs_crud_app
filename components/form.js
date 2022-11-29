import UpdateUserForm from "./updateUserForm";
import AddUserForm from "./addUserForm";

export default function form() {
  const flag = true;

  return (
    <div className="container mx-auto py-6">
      {flag ? <AddUserForm /> : <UpdateUserForm />}
    </div>
  );
}
