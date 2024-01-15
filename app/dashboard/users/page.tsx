import React from "react";
import styles from "../../ui/dashboard/users/user.module.css";

import Image from "next/image";
import Link from "next/link";
import Search from "../../ui/dashboard/search/search";
import Paginatin from "../../ui/dashboard/pagination/pagination";

const UsersPage = async ({ searchParams }) => {
  const getTime = (time?: Date) : string | undefined => {
    if (time) {
      const currentTime = new Date();
      const createdAt = new Date(time);
      const timeDiff = Number(currentTime) - Number(createdAt);
      const secondsDiff = Math.floor(timeDiff / 1000);
      const minutesDiff = Math.floor(timeDiff / (1000 * 60));
      const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const monthsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
      const yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30 * 12));
      if (yearsDiff > 0) {
        return `${yearsDiff == 1 ? '先月' : `${yearsDiff} 年前`}`
      } else {
        if (monthsDiff > 0) {
          return `${monthsDiff == 1 ? '先月' : `${monthsDiff} 月前`}`
        } else {
          if (daysDiff > 0) {
            return `${daysDiff == 1 ? '昨日' : `${daysDiff} 日前`}`
          } else {
            if (hoursDiff > 0) {
              return `${hoursDiff == 1 ? '一時間前' : `${hoursDiff} 時間前`}`
            } else if (minutesDiff > 0) {
              return `${minutesDiff == 1 ? '一分前' : `${minutesDiff} 分前`}`
            } else {
              return `${secondsDiff <= 1 ? '一秒前' : `${secondsDiff} 秒前`}`
            }
          }
        }
      }
    }
  }

  const users = await prisma.user.findMany();
  // const time = new Date(users.createdAt);
  const modifiedUsers = users.map((user) => {
    const time = new Date(user.createdAt);
    return {
      ...user,
      createdAt: getTime(time),
      // createdAt: time,
    };
  });
  const roleMapping = {
    1: 'admin',
    2: 'editor',
    3: 'user',
    4: 'concierge',
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {modifiedUsers.map((user) => (
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  ></Image>{" "}
                  {`${user.firstname} ${user.lastname}`}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{roleMapping[user.role_id]}</td>
              <td>Active</td>
              <td>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {/* {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{-
                
                user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <Paginatin />
      {/* <Pagination count={count} /> */}
    </div>
  );
};

export default UsersPage;
