import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from "react";
import { Card, Grid, Subtitle, Button, CategoryBar, Legend, Tab, TabList, Text, Title, Metric, Flex, ProgressBar, BadgeDelta, AreaChart, Icon, Toggle, ToggleItem, BarChart, DateRangePicker, DateRangePickerValue, Callout, Badge } from "@tremor/react";
import { ExclamationCircleIcon, InformationCircleIcon, StatusOnlineIcon } from "@heroicons/react/outline";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const chartdata2 = [
  {
    topic: "Topic 1",
    "Group A": 890,
    "Group B": 338,
    "Group C": 538,
    "Group D": 396,
    "Group E": 138,
    "Group F": 436,
  },
  {
    topic: "Topic 2",
    "Group A": 289,
    "Group B": 233,
    "Group C": 253,
    "Group D": 333,
    "Group E": 133,
    "Group F": 533,
  },
];

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

export default function KpiCardGrid() {
  const [selectedView, setSelectedView] = useState("1");
  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      <Metric>Dashboard</Metric>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Detail" />
      </TabList>
      {selectedView === "1" ? (
        <>
          <Grid numColsLg={4} className="h-50 mt-8 gap-6">
          <Card className="max-w-lg">
            <Flex alignItems="start">
              <div>
                <Text>Connections</Text>
                <Metric>126</Metric>
              </div>
              <Badge icon={StatusOnlineIcon} size="sm">Live</Badge>
            </Flex>
          </Card>
          <Card className="max-w-lg" decoration="bottom" decorationColor="amber">
            <Flex alignItems="start">
              <div>
                <Text>Replies</Text>
                <Metric>32</Metric>
              </div>
              <BadgeDelta deltaType="unchanged">13.2%</BadgeDelta>
            </Flex>
          </Card>
          <Card className="max-w-lg" decoration="bottom" decorationColor="green">
            <Flex alignItems="start">
              <div>
                <Text>Leads</Text>
                <Metric>12</Metric>
              </div>
              <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
            </Flex>
          </Card>
          <Card className="max-w-lg" decoration="bottom" decorationColor="green">
            <Flex alignItems="start">
              <div>
                <Text>Meetings</Text>
                <Metric>5</Metric>
              </div>
              <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
            </Flex>
          </Card>
          </Grid>
            <div className="mt-6">
            <Card>
            <Title>Newsletter revenue over time (USD)</Title>
            <Subtitle>Drei Weieren is an oasis of peace in the middle of St.Gallen.</Subtitle>
            <AreaChart
              className="h-72 mt-4"
              data={chartdata}
              index="date"
              categories={["SemiAnalysis", "The Pragmatic Engineer"]}
              colors={["indigo", "cyan"]}
              valueFormatter={dataFormatter}
            />
          </Card>
          </div>

        </>
 ) : (
  <Card className="mt-6">
    <Card>
      <Title>Writing Contest: Entries</Title>
      <BarChart
        className="mt-6"
        data={chartdata2}
        index="name"
        categories={[
          "Group A",
          "Group B",
          "Group C",
          "Group D",
          "Group E",
          "Group F",
        ]}
        colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </Card>
  </Card>
)}
</main>
);
}