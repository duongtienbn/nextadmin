import React from "react";
import styles from "./transactions.module.css";
import Image from "next/image";
export default function Transaction() {
  return (
    <div className={styles.container}>
    <h2 className={styles.title}>Latest Transactions</h2>
    <table className={styles.table}>
        <thead>
          <tr>
            {/* <td>#</td> */}
            <td>Name</td>
            <td>Status</td>
            <td>Company application</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
            </div></td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
