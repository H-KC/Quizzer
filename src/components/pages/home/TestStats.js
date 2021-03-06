import { ResponsivePie } from "@nivo/pie";
import { Card } from "@material-ui/core";
import TestContext from "../../../context/test/testContext";
import { useContext } from "react";

const TestStats = () => {
  // init test context
  const testContext = useContext(TestContext);
  const { tests } = testContext;

  const { ready, finished, outdate } = extractNumbers(tests);

  const data = [
    {
      id: "outdate",
      label: "Outdate",
      value: outdate,
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
      value: outdate + finished + ready,
      color: "hsl(149, 70%, 50%)",
    },
  ];
  return (
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
    </Card>
  );
};

export default TestStats;

const extractNumbers = (data) => {
  let outdate = 0;
  let finished = 0;
  let ready = 0;
  data.map(({ state }) => {
    if (state === "outdate") {
      outdate++;
    } else if (state === "finished") {
      finished++;
    } else {
      ready++;
    }
  });
  return { outdate, finished, ready };
};
