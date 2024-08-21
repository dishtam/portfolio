import Card from "../components/Card";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

export default function Coding() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-10 p-10">
      <div className="flex w-full justify-center items-center gap-3">
        <Card id="C++" subheading="CPP and DSA stats">
          Attended over 40 LeetCode contests and achieved a highest rating of
          1680.
        </Card>
        <div className="w-64">
          <PieChart />
        </div>
      </div>
      <div className="justify-center place-content-end items-center">
        <LineChart />
      </div>
    </div>
  );
}
