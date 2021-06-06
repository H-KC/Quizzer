import { Bar } from "react-chartjs-2";

const ClassStats = () => {
  const data = {
    labels: ["hkc", "salah", "lemino"],
    datasets: [
      {
        label: "Classes",
        data: [122, 345, 565, 676],
        backgroundColor: "#5161CE",
      },
    ],
  };

  return (
    <div className='chart mt-lg-5'>
      <Bar data={data} />
    </div>
  );
};
export default ClassStats;
