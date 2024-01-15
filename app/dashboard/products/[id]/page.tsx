import Image from "next/image";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";

import React from "react";

export default function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
            <Image src="/noavatar.png" alt="" fill></Image>
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>

        <div className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="userName"/>
          <label>Price</label>
          <input type="number" name="price" placeholder="...@gmail.com"/>
          <label>Stock</label>
          <input type="number" name="stock" placeholder=""/>
          <label>Color</label>
          <input type="text" name="colo" placeholder="+123456"/>
          <label>Size</label>
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
