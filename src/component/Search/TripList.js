import React, { useEffect, useState } from "react";
import {
    selectSuccess,
    selectTripList,
    getTrips,
    setSuccess,
} from "../../features/trip/tripSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

function TripListContent() {
    const [trips, setTrips] = useState([]); // Assign initial value from Redux store
    const dispatch = useDispatch();
    // ...

    const getTripList = async () => {
        if (!success) {
            dispatch(getTrips());
        } else {
            setTrips(TripList);
            dispatch(setSuccess(true));
        }
    };

    useEffect(() => {
        getTripList();
        removeRedundantCodes();

        // eslint-disable-next-line
    }, [success]);

    function removeRedundantCodes() {
        let noDataTag = document.getElementsByClassName("odd")[0];
        if (noDataTag != null) {
            noDataTag.remove();
        }
    }

    //   function handleCreate(e) {
    //     e.preventDefault();
    //     navigate('/Trip/add');
    //   }

    return (
        <main>
            <div className="container-fluid">
                <h1 className="mt-4">List of Trip</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item">
                    </li>
                    <li className="breadcrumb-item active">List of Trip</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between">
            <span>
              <i className="fas fa-table mr-1"></i>
              List of Trip
            </span>
                        <span>

            </span>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table
                                className="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellSpacing="0"
                            >
                                <thead>
                                <tr>
                                    <th>Origin</th>
                                    <th>destination</th>
                                    <th>flight Date</th>
                                    <th colSpan={2}>Action</th>
                                </tr>
                                </thead>
                                <tfoot>
                                <tr>
                                    <th>Origin</th>
                                    <th>destination</th>
                                    <th>flight Date</th>
                                    <th colSpan={2}>Action</th>
                                </tr>
                                </tfoot>
                                <tbody>
                                {trips && trips.map((Trip) => (
                                    <tr key={Trip.id}>
                                        <td>{Trip.origin} </td>
                                        <td>{Trip.destination} </td>
                                        <td>{Trip.flightDate} </td>

                                        <td>
                                            {/*<Link to={`/detail-Trip/${Trip.id}`}>Detail</Link>*/}
                                        </td>
                                        <td>
                                            {/*<Link to={`/edit-Trip/${Trip.id}`}>Edit</Link>*/}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TripListContent;
