import { Field, ErrorMessage } from "formik";
import { SigningUpUser } from "../../@types/@types.user";

type Props = {
  user: SigningUpUser;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UserFieldset = ({ user, handleChange }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <fieldset>
        <label htmlFor="displayName" className="w-2/4">
          Display Name:
        </label>
        <div className="w-4/4">
          <Field
            type="text"
            id="displayName"
            name="displayName"
            className="input-text input input-bordered input-primary w-full max-w-xs"
            value={user?.displayName || ""}
            onChange={handleChange}
          />
          <div className="error-message text-error">
            <ErrorMessage name="displayName" />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default UserFieldset;
