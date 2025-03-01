import Image from "next/image";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";

import React from "react";

export default function SingleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
            <Image src="/noavatar.png" alt="" fill></Image>
        </div>
        john Ten
      </div>
      <div className={styles.formContainer}>

        <div className={styles.form}>
          <label>UserName</label>
          <input type="text" name="username" placeholder="userName"/>
          <label>Email</label>
          <input type="email" name="email" placeholder="...@gmail.com"/>
          <label>Password</label>
          <input type="password" name="password" placeholder=""/>
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+123456"/>
          <label>Address</label>
          <textarea name="address" placeholder=""/>
          <label htmlFor="">is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true">Yes</option>
            <option value="false">no</option>
          </select>
          <label htmlFor="">is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true">Yes</option>
            <option value="false">no</option>
          </select>
        </div>
      </div>
    </div>
  );
}
