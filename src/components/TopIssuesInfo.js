import React from "react";
import { Container } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const TopIssuesInfo = () => {
  const viewInfo = useSelector((state) => state.issueClicks);
  const topIssues = viewInfo
    .sort((a, b) => {
      return b.numberOfViews - a.numberOfViews;
    })
    .slice(0, 5);
  console.log("topIssues", topIssues);
  const topNumberOfViews = topIssues.map((item) => item.numberOfViews);
  console.log("NUMBER OF VIEWS", topNumberOfViews);
  const issueNames = topIssues.map((item) => item.issueName);
  console.log("NAME OF VIEWS", issueNames);

  const data = {
    labels: issueNames,
    datasets: [
      {
        label: "Top Viewed Issues",
        data: topNumberOfViews,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Container>
        <h1>TOP ISSUES</h1>
        <Bar data={data} options={{}} />
      </Container>
    </div>
  );
};

export default TopIssuesInfo;
