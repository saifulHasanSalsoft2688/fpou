import { useState, useEffect } from "react";

import { DashboardLayout } from "./../../Components/Layout/DashboardLayout";
import { stats } from "../../Config/Data";
import { CChart } from "@coreui/react-chartjs";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./style.css";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {

    document.title = 'FPUO | Dashboard';

    setStatistics(stats)
  }, []);

  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          {/* <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row">
                  {statistics.map((stats) => (
                    <div className="col-xl-4 col-md-6 stats" key={stats.id}>
                      <StatCard item={stats} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
          <div className="row mb-3">
            <div className="col-12">
              <div className="pageTitle">
                <h3 className="font-weight-bold">Dashboard</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="col-12">
                <div className="dashCard">
                  <h3 className="mainTitle">Number Of Events</h3>
                  <div className="graph-wrapper">
                    <CChart
                      type="line"
                      height="90"
                      options={{
                        scales: {
                          y: {
                            suggestedMin: 0,
                            suggestedMax: 40,
                          },
                        },
                      }}
                      data={{
                        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep"],
                        tension: "0.5",
                        datasets: [
                          {
                            label: "My First dataset",
                            fill: true,
                            backgroundColor: "#D7E4FE",
                            borderColor: "#1E52CF",
                            pointBackgroundColor: "#1E52CF",
                            pointBorderColor: "#1E52CF",
                            borderWidth: 1,
                            data: [25, 30, 35, 70, 65, 50, 40, 45, 55, 30],
                            tension: 0.5,
                          },
                          // {
                          //   label: "My Second dataset",
                          //   backgroundColor: "rgba(45, 89, 240, 1)",
                          //   borderColor: "#2D59F0",
                          //   pointBackgroundColor: "#2D59F0",
                          //   borderWidth: 1,
                          //   pointBorderColor: "#2D59F0",
                          //   data: [30, 35, 30, 35, 30],
                          //   tension: 0.5,
                          // },
                        ],
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="dashCard">
                    <h3 className="mainTitle">Brands</h3>
                    <div className="graph-wrapper">
                      <CChart
                        type="bar"
                        height="300"
                        options={{
                          scales: {
                            y: {
                              suggestedMin: 0,
                              suggestedMax: 40,
                            },
                          },
                        }}
                        data={{
                          labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep"],
                          tension: "0.5",
                          datasets: [
                            {
                              label: "My First dataset",
                              fill: true,
                              backgroundColor: "#1E52CF",
                              borderColor: "#1E52CF",
                              pointBackgroundColor: "#1E52CF",
                              pointBorderColor: "#1E52CF",
                              borderWidth: 1,
                              data: [25, 30, 35, 70, 65, 50, 40, 45, 55, 30],
                              tension: 0.5,
                            },
                            // {
                            //   label: "My Second dataset",
                            //   backgroundColor: "rgba(45, 89, 240, 1)",
                            //   borderColor: "#2D59F0",
                            //   pointBackgroundColor: "#2D59F0",
                            //   borderWidth: 1,
                            //   pointBorderColor: "#2D59F0",
                            //   data: [30, 35, 30, 35, 30],
                            //   tension: 0.5,
                            // },
                          ],
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dashCard">
                    <h3 className="mainTitle">Model</h3>
                    <div className="graph-wrapper">
                      <CChart
                        type="pie"
                        height="200"
                        options={{
                          scales: {
                            y: {
                              suggestedMin: 0,
                              suggestedMax: 40,
                            },
                          },
                        }}
                        data={{
                          labels: ["Jan", "Feb", "March", "April"],
                          tension: "0.5",
                          datasets: [
                            {
                              label: "My First dataset",
                              fill: true,
                              backgroundColor: "#D7E4FE",
                              borderColor: "#1E52CF",
                              pointBackgroundColor: "#1E52CF",
                              pointBorderColor: "#1E52CF",
                              borderWidth: 1,
                              data: [25, 30, 35, 70, 65, 50, 70, 65, 50],
                              tension: 0.5,
                            },
                            // {
                            //   label: "My Second dataset",
                            //   backgroundColor: "rgba(45, 89, 240, 1)",
                            //   borderColor: "#2D59F0",
                            //   pointBackgroundColor: "#2D59F0",
                            //   borderWidth: 1,
                            //   pointBorderColor: "#2D59F0",
                            //   data: [30, 35, 30, 35, 30],
                            //   tension: 0.5,
                            // },
                          ],
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dashCard mb-5">
                <h3 className="mainTitle">Company Profile</h3>
                <div className="companyProfileImage text-center py-3">
                  <img src='./images/company-profile.png' className="mw-100" draggable="false" />
                </div>
                <div className="profileInfo text-center">
                  <h3 className="mainTitle">Company Profile</h3>
                  <p>Lorem Ipsum is simply dummy text </p>
                  <p><Link to="#">View Profile</Link></p>
                </div>
              </div>
              <div className="dashCard">
                <h3 className="mainTitle mb-4">Event Of The Month</h3>
                <div className="eventBox mb-3 border p-2 rounded-3">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="eventImage d-flex gap-15 flex-wrap align-items-center">
                            <div className="imageBox">
                                <img src="./images/e1.png" draggable="false" />
                            </div>
                            <div className="eventInfo">
                                <h4>Event 1</h4>
                                <p className="mb-0">23/02/2015</p>
                            </div>
                        </div>
                        <div className="eventLinkBtn">
                            <Link to="#"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></Link>
                        </div>
                    </div>
                </div>
                <div className="eventBox mb-3 border p-2 rounded-3">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="eventImage d-flex gap-15 flex-wrap align-items-center">
                            <div className="imageBox">
                                <img src="./images/e1.png" draggable="false" />
                            </div>
                            <div className="eventInfo">
                                <h4>Event 1</h4>
                                <p className="mb-0">23/02/2015</p>
                            </div>
                        </div>
                        <div className="eventLinkBtn">
                            <Link to="#"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></Link>
                        </div>
                    </div>
                </div>
                <div className="eventBox mb-3 border p-2 rounded-3">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="eventImage d-flex gap-15 flex-wrap align-items-center">
                            <div className="imageBox">
                                <img src="./images/e1.png" draggable="false" />
                            </div>
                            <div className="eventInfo">
                                <h4>Event 1</h4>
                                <p className="mb-0">23/02/2015</p>
                            </div>
                        </div>
                        <div className="eventLinkBtn">
                            <Link to="#"><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></Link>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
