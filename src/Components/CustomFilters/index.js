import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./style.css";

const CustomFilters = (props) => {

  return (
    <>
      <div className="tableFilters">
        <div className="row">
          <div className="col-xl-6 mb-2">
            {props?.dateFilter && (
              <div className="align-items-center d-md-flex filterWrapper gap-2 mt-1">
                <label className="filterLabel mt-md-4">Filter By:</label>
                <div className="d-flex gap-3">
                  <div className="fromDate">
                    <p className="mb-2">From</p>
                    <input
                      type="date"
                      placeholder="From"
                      name="from"
                      className="iviteFields"
                      onChange={(event) => { props?.setFilterFrom(event.target.value) }}
                    />
                  </div>
                  <div className="toDate">
                    <p className="mb-2">To</p>
                    <input
                      type="date"
                      placeholder="To"
                      name="to"
                      className="iviteFields"
                      onChange={(event) => { props?.setFilterSortValue(event.target.value) }}
                    />
                  </div>
                </div>
              </div>

            )}

            {
              props?.showInteries && (
                <div className="showInteries mt-4">
                  <div className="d-flex align-items-center gap-15">
                    <p className="mb-0">Show</p>
                    <input
                      type="number"
                      placeholder="10"
                      name="from"
                      className="showIntries"
                      onChange={(event) => { props?.setFilterFrom(event.target.value) }}
                    />
                    <p className="mb-0">Entries</p>
                  </div>
                </div>
              )
            }
          </div>
          {
            (props?.btnLink) && (
              <div className="col-xl-6 mb-2">
                <div className="redirectBtn">
                  <Link to={props?.btnLink} className={props?.btnClass}>{props?.btnText}</Link>
                </div>
              </div>
            )
          }
          <div className="col-xl-6 mb-2">
            {props?.filterSearch && (
              <div className="filterWrapper d-md-flex align-items-baseline justify-content-end gap-2">
                <div className="searchWrapper">
                  <input
                    type="text"
                    placeholder="Search"
                    name="search"
                    className="filterInput searchInput"
                    value={props?.filterSearchValue}
                    onChange={(event) => { props?.setFilterSearchValue(event.target.value) }}
                  />
                  <button className="searchButton notButton">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="col-xl-6 mb-2">
            {/* {props?.filterSort && (
              <div className="filterWrapper d-md-flex align-items-baseline gap-2">
                <label className="filterLabel">Show:</label>
                <select className="filterInput"
                  onChange={(event) => { props?.setFilterTo(event.target.value) }}
                >
                  {props?.filterSortValues.map((item) => (
                    <option key={item.value} value={item.value}>Sort by {item.text}</option>
                  ))}
                </select>
              </div>
            )} */}
          </div>
          {props?.filterSort && (
            <div className="col-xl-6 mb-2">
              <div className="filterWrapper d-md-flex align-items-baseline justify-content-xl-end gap-2">
                <label className="filterLabel">Sort By:</label>
                <select className="filterInput"
                  onChange={(event) => { props?.setFilterTo(event.target.value) }}
                >
                  {props?.filterSortValues.map((item) => (
                    <option key={item.value} value={item.value}>Sort by {item.text}</option>
                  ))}
                </select>
              </div>
            </div>
          )}



        </div>
      </div>
    </>
  );
};

export default CustomFilters;




// filterSort
// filterSortValue
// setFilterSortValue

// filterSearch
// filterSearchValue
// setFilterSearchValue

// dateFilter
// filterFrom
// setFilterFrom
// filterTo
// setFilterTo
