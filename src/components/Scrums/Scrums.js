import React from "react";
import scrums from "../../data/scrums.js";
import StoriesStatus from "../StoriesStatus/StoriesStatus";
import "./Scrums.css";

const Scrums = props => {
  const iteration = "PI34.3";

  return (
    <div>
      <div className="row">
        <button className="btn btn-link" onClick={props.buttonClick}>
          {props.label}
        </button>
      </div>
      {props.showScrums ? (
        <div className="row">
          <table className="table table-striped table-responsive">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Iteration</th>
                <th>Feature</th>
                <th>Status</th>
                <th>Dependencies</th>
                <th>Release</th>
                <th>Branch</th>
                <th>Environment</th>
              </tr>
            </thead>
            <tbody>
              {scrums.map((scrum, index) => (
                <tr key={index}>
                  <td>{scrum.name}</td>
                  <td>{scrum.type}</td>
                  <td>{iteration}</td>
                  <td>{scrum.feature}</td>
                  <td className="status">
                    <StoriesStatus status={scrum.status} />
                  </td>
                  <td>{scrum.dependencies}</td>
                  <td>{scrum.release}</td>
                  <td>{scrum.branch}</td>
                  <td>{scrum.environment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default Scrums;
