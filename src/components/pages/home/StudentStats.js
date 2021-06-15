import { ResponsivePie } from "@nivo/pie";
import { Card } from "@material-ui/core";
import StudentContext from "../../../context/student/studentContext";
import { useContext } from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

const StudentStats = () => {
  //init student context
  const studentContext = useContext(StudentContext);
  const { students } = studentContext;
  const { New, ready, finished } = extractNumbers(students);
  const data = [
    {
      id: "New",
      label: "New",
      value: New,
      color: "hsl(253, 70%, 50%)",
    },
    {
      id: "ready",
      label: "Ready",
      value: ready,
      color: "hsl(360, 70%, 50%)",
    },
    {
      id: "finished",
      label: "Finished",
      value: finished,
      color: "hsl(357, 70%, 50%)",
    },
    {
      id: "total",
      label: "Total",
      value: New + finished + ready,
      color: "hsl(149, 70%, 50%)",
    },
  ];

  return (
    <>
      <Card className='m-2' style={{ height: "300px" }}>
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor='#333333'
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "ruby",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
        {/* <Chip color='primary' avatar={<Avatar>S</Avatar>} label='Students' /> */}
      </Card>
    </>
  );
};

export default StudentStats;

const extractNumbers = (data) => {
  let New = 0;
  let finished = 0;
  let ready = 0;
  data.map(({ state }) => {
    if (state === "new") {
      New++;
    } else if (state === "finished") {
      finished++;
    } else {
      ready++;
    }
  });
  return { New, finished, ready };
};
