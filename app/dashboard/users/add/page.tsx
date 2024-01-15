import styles from "../../../ui/dashboard/users/addUser/addUser.module.css"
// import { addProduct } from "@/app/lib/actions";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form 
    //   action={addProduct}
      className={styles.form}>
        <input type="text" placeholder="userName" name="userName" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="phone" placeholder="phone" name="phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value="false" selected>Is Admin?</option>
          <option value="true">Yes</option>
          <option value="no">No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value="true" selected>Is Active?</option>
          <option value="true">Yes</option>
          <option value="no">No</option>
        </select>
        <textarea
          required
          name="address"
          id="address"
          rows={16}
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;