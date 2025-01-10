import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaProductHunt, FaShippingFast, FaUsers } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

//
const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const { data } = await axiosSecure("/admin-stats");
      return data;
    },
  });

  //
  const { data: orderStats = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const { data } = await axiosSecure("/order-stats");
      return data;
    },
  });



  // pie chart
  //   for custom name
  const data = orderStats.map((order) => {
    return { name: order?.category, value: order?.quantity };
  });

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  //
  return (
    <div className="py-10">
      <h1 className="text-4xl font-serif">Hi, Welcome back!</h1>

      <div className="stats shadow gap-6 mt-6 w-11/12 mx-auto overflow-hidden rounded-lg">
        <div className="stat ">
          <div className="stat-figure text-secondary ">
            <RiMoneyDollarCircleFill className="text-5xl" />
          </div>
          <div className="stat-value">{stats?.totalRevenue}</div>
          <div className="stat-desc text-xl font-medium">Revenue</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-5xl" />
          </div>
          <div className="stat-value">{stats?.customers}</div>
          <div className="stat-title text-xl font-medium">Customers</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaShippingFast className="text-5xl" />
          </div>
          <div className="stat-value">{stats?.orders}</div>
          <div className="stat-title text-xl font-medium">Orders</div>
        </div>
        {/*  */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaProductHunt className="text-5xl" />
          </div>
          <div className="stat-value">{stats?.products}</div>
          <div className="stat-title text-xl font-medium">Products</div>
        </div>
      </div>
      {/* charts */}
      <div className="flex py-10">
        {/* bar charts */}
        <div className="w-1/2 mx-auto">
          <BarChart
            width={500}
            height={300}
            data={orderStats}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis className="capitalize" dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {orderStats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        {/* pai charts */}
        <div className="w-1/2 mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Legend className="capitalize" />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
