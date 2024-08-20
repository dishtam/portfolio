import Card from "../components/Card";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

export default function Coding() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 m-10 p-10">
      <div className="flex w-full justify-center items-center gap-3">
        <Card id="C++" subheading="This is subheading 1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          aliquid.
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
