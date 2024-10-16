import PropTypes from "prop-types";
import "./barchartbox.scss";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";
const BarChartBox = (props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

BarChartBox.prototype = {
  title: PropTypes.string,
  color: PropTypes.string,
  dataKey: PropTypes.string,
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      profit: PropTypes.number,
    })
  ),
};

export default BarChartBox;
