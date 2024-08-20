import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ContestType{
    title: string;
    starttime: number;
}

interface contestParticipationType {
  attended: boolean;
  rating: number;
  ranking: number;
  trendDirection: string;
  problemsSolved: number;
  totalProblems: number;
  finishTimeInSeconds: number;
  contest: ContestType
}

export default function LineChart() {
  const [data, setData] = useState<any>({
    labels: [],
    datasets: [],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Contest Ratings Over Time",
      },
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          // "https://alfa-leetcode-api.onrender.com/rohhiiiit/contest"
          "http://localhost:3000/rohhiiiit/contest"
        );

        const contestParticipation:contestParticipationType = response.data.contestParticipation;
        if (Array.isArray(contestParticipation)) {
          const labels: number[] = contestParticipation.map(
            (_: contestParticipationType, index: number) => index + 1
          );
          const ratings: number[] = contestParticipation.map(
            (contest: contestParticipationType) => contest.rating
          );

          const lineData = {
            labels: labels,
            datasets: [
              {
                label: "Ratings",
                data: ratings,
                borderColor: "#FFB700",
                fill: false,
              },
            ],
          };

          setData(lineData);
        } else {
          console.error("Invalid data structure", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="h-full w-full flex justify-center items-center">
      {data.labels.length > 0 ? (
        <Line options={options} data={data} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
