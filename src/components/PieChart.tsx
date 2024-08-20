import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://alfa-leetcode-api.onrender.com/rohhiiiit/solved"
          // "http://localhost:3000/rohhiiiit/solved"
        );

        const pieData = {
          labels: ["Easy", "Medium", "Hard"],
          datasets: [
            {
              label: "Questions Solved",
              data: [
                response.data.easySolved,
                response.data.mediumSolved,
                response.data.hardSolved,
              ],
              backgroundColor: ["#1CBABA", "#FFB700", "red"],
              hoverOffset: 4,
            },
          ],
        };

        setData(pieData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const options = {};

  return (
    <div className="h-full w-full flex justify-center items-center">
      {data ? (
        <Pie options={options} data={data} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
}
