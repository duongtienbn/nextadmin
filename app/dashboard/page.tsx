import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import RightBar from "../ui/dashboard/rightbar/rightbar";
import Transaction from "../ui/dashboard/transactions/transactions";

function DashBoard() {
    const item = {
        title: "total Users",
        number: 10.14 ,
        change:12
    }
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card item={item}/>
          <Card item={item}/>
          <Card item={item}/>
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
}

export default DashBoard;
