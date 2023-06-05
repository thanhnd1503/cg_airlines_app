import React, {useEffect, useState} from "react";
import {
    selectSuccess,
    selectTripList,
    getTrips,
    setSuccess,
} from "../../features/trip/tripSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

// import { Link, useNavigate } from "react-router-dom";

function TripListContent() {
    const {tripId} = useParams();
    const [trips, settrips] = useState([]);
    const dispatch = useDispatch();
    //   const navigate = useNavigate();
    const tripList = useSelector(selectTripList);
    const success = useSelector(selectSuccess);

    const getTripList = async () => {
        if (tripList == null && tripId != null) {
            dispatch(getTrips());
        } else {
            const { id,origin,destination,flightDate } = tripList;
            const currentTripList = {id, origin,destination,flightDate };
            settrips(currentTripList);
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
    //     navigate('/trip/add');
    //   }

    return (
        <main>
            <div className="container-fluid">
                <h1 className="mt-4">List of trip</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">List of trip</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between">
            <span>
              <i className="fas fa-table mr-1"></i>
              List of trip
            </span>
                        <span>
              <Link to={"/add-trip"} type="button" class="btn btn-primary">
                Add New trip
              </Link>
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
                                    <th>origin</th>
                                    <th>destination</th>
                                    <th>flight date</th>
                                    <th colSpan={2}>Action</th>
                                </tr>
                                </thead>
                                <tfoot>
                                <tr>
                                    <th>origin</th>
                                    <th>destination</th>
                                    <th>flight date</th>
                                    <th colSpan={2}>Action</th>
                                </tr>
                                </tfoot>
                                <tbody>
                                {trips && trips.map((trip) => (
                                    <tr key={trip.id}>
                                        <td>{trip.origin} </td>
                                        <td>{trip.destination} </td>
                                        <td>{trip.flightDate} </td>

                                        <td>
                                            <Link to={`/detail-trip/${trip.id}`}>Detail</Link>
                                        </td>
                                        <td>
                                            <Link to={`/edit-trip/${trip.id}`}>Edit</Link>
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
