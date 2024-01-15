import styles from "../ui/login/login.module.css";
// import LoginForm from "../ui/login/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <h1>Login</h1>
            <input type="text" placeholder="user Name"/>
            <input type="text" placeholder="password"/>
            <button>Login</button>
        </form>
      {/* <LoginForm/> */} 
    </div>
  );
};

export default LoginPage;