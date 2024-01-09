import React, { useEffect, useState } from "react";
// import patients from "../../assets/img/patients/patient1.jpg";
// import doctor from "../../assets/img/doctors/doctor-thumb-01.jpg";
import DataTable from "datatables.net-dt";
import PageHeader from "../../components/PageHeader/PageHeader";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import "./Permission.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPermission,
  setMessageEmpty,
} from "../../Redux/Features/user/userSlice";
import {
  createPermission,
  deletePermission,
  getUserPermission,
} from "../../Redux/Features/user/userApiSlice";
import { createToast } from "../../utils/createToast";
import swal from 'sweetalert';
const Permission = () => {
  // sent data to backend server
  const dispatch = useDispatch();
  // get data from redux
  const { permission, error, message } = useSelector(getAllPermission);

  // get input value from form data
  const [input, setInput] = useState({
    name: "",
  });

  // console.log(input);
  // handle state changes
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle slert message

  useEffect(() => {
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message, dispatch]);

  // click to sent form data to server
  const submitFormData = (e) => {
    e.preventDefault();
    dispatch(createPermission(input));
    setInput({
      name: "",
    });
  };

  //useeffect for rendering all data
  useEffect(() => {
    dispatch(getUserPermission());
  }, [dispatch]);


  // handle delete item
  const handleDeletePer = (id) => {
    swal({
      title: "Are you sure",
      text: 'This will delete your data',
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch(deletePermission(id))
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    
  }
  // display data table
  useEffect(() => {
    new DataTable(".datatable");
  });

  return (
    <>
      <ModalPopup target="permissionModalPopup" title="Add specialist">
        <form onSubmit={submitFormData}>
          <label htmlFor="Permission Name">
            <div className="my-3">
              <input
                type="text"
                className="form-control label-input"
                placeholder="Permission Name"
                name="name"
                value={input.name}
                onChange={handleInputChange}
              />
            </div>
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            Add new Permission
          </button>
        </form>
      </ModalPopup>
      <PageHeader title="Permission" />

      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-info my-3"
            data-target="#permissionModalPopup"
            data-toggle="modal"
          >
            Add Permission
          </button>

          <div className="card card-table">
            <div className="card-header">
              <h4 className="card-title">Appointment List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0 datatable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Slug</th>
                      <th>Permission</th>
                      <th>Edit at</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-bold">
                    {permission &&
                      [...permission].reverse().map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.slug}</td>
                            <td>Admin</td>
                            <td>3 min ago</td>
                            <td>
                              <div className="status-toggle">
                                <input
                                  type="checkbox"
                                  id="status_1"
                                  className="check"
                                  checked
                                />
                                <label
                                  htmlFor="status_1"
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <td>
                              <button className="btn btn-danger btn-sm" onClick={() => handleDeletePer(item._id)}>
                                <i className="fe fe-trash"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <label htmlFor=""></label>
        </div>
      </div>
    </>
  );
};

export default Permission;
