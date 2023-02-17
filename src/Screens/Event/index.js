import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "./../../Components/CustomTable";

import UseTableControls from "../../Config/UseTableControls";


import { maleData } from "./../../Config/Data";

import "./style.css";

export const Event = () => {

  const {
    filterSort, filterSortValue, setFilterSortValue, filterSortValues, filterSearch, filterSearchValue, setFilterSearchValue, dateFilter, filterFrom, setFilterFrom, filterTo, setFilterTo
  } = UseTableControls();

  const navigate = useNavigate();

  const [data, setData] = useState([]);



  useEffect(() => {
    document.title = 'FPUO | Male Management';

    setData(maleData);
  }, []);

  const maleHeaders = [
    {
      key: "event",
      title: "event",
    },
    {
      key: "registered",
      title: "Registered On",
    },
    {
      key: "location",
      title: "location",
    },
    {
      key: "status",
      title: "Status",
    },
  ];


  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="dashCard">
                <div className="row mb-3">
                  <div className="col-12 mb-2">
                    <h2 className="mainTitle">Event List</h2>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <CustomTable
                      headers={maleHeaders}
                      filterSortValue={filterSortValue}


                      filterSearchValue={filterSearchValue}
                      setFilterSearchValue={setFilterSearchValue}

                      dateFilter={true}
                      showInteries={true}
                      filterFrom={filterFrom}
                      setFilterFrom={setFilterFrom}
                      filterTo={filterTo}
                      setFilterTo={setFilterTo}

                    >
                      <tbody>
                        {data.map((item) => (
                          <tr key={item.id}>
                            <td className="text-capitalize">
                              <img
                                src={item.image}
                                alt="thumbnail"
                                className="thumbnail"
                              />
                              {item.name}
                            </td>
                            <td>{item.date}</td>
                            <td>{item.location}</td>
                            <td className={item.status == 'In Process' ?'yellowColor' : item.status == 'Completed' ? 'greenColor' : 'pinkColor'}>{item.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </CustomTable>
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
