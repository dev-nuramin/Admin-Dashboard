import React from 'react'
import profile_1 from "../../assets/img/profiles/avatar-01.jpg";
import topLogo from "../../assets/img/logo.png";
import doc from '../../assets/img/doctors/doctor-thumb-01.jpg'
import useDropdownControlHooks from '../../hooks/useDropdownControlHooks';
import patient from '../../assets/img/patients/patient1.jpg'
const Header = () => {

  // const {isOpen, toogleMenu, dropDownRef} = useDropdownControlHooks();
  // const {isOpen:isOpenNoti, toogleMenu: isToogleMenu, dropDownRef: notificationRef} = useDropdownControlHooks();
  return (
    <>
     <div className="header">
          <div className="header-left">
            <a href="index.html" className="logo">
              <img src={topLogo} alt="Logo" />
            </a>
            <a href="index.html" className="logo logo-small">
              <img
                src="assets/img/logo-small.png"
                alt="Logo"
                width="30"
                height="30"
              />
            </a>
          </div>

          <a href="javascript:void(0);" id="toggle_btn">
            <i className="fe fe-text-align-left"></i>
          </a>

          <div className="top-nav-search">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Search here"
              />
              <button className="btn" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>

          <a className="mobile_btn" id="mobile_btn">
            <i className="fa fa-bars"></i>
          </a>

          {/* <ul className="nav user-menu">
            <li className="nav-item dropdown noti-dropdown" ref={notificationRef}>
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
                onClick={isToogleMenu}
              >
                <i className="fe fe-bell"></i>{" "}
                <span className="badge badge-pill">3</span>
              </a>


              {
                isOpenNoti && <div className="dropdown-menu notifications d-block" style={{transform:"translate(-305px, 0px)"}}>
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <a href="javascript:void(0)" className="clear-noti">
                    {" "}
                    Clear All{" "}
                  </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={doc}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">
                                Dr. Ruby Perrin
                              </span>{" "}
                              Schedule{" "}
                              <span className="noti-title">
                                her appointment
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                4 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={doc}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Charlene Reed</span>{" "}
                              has booked her appointment to{" "}
                              <span className="noti-title">
                                Dr. Ruby Perrin
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                6 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={doc}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Travis Trimble</span>{" "}
                              sent a amount of $210 for his{" "}
                              <span className="noti-title">appointment</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                8 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={doc}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Carl Kelly</span>{" "}
                              send a message{" "}
                              <span className="noti-title"> to his doctor</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                12 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="#">View all Notifications</a>
                </div>
              </div>
              }
            </li>


            <li className="nav-item dropdown has-arrow" ref={dropDownRef}>
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
                onClick={toogleMenu}
              >
                <span className="user-img">
                  <img
                    className="rounded-circle"
                    src={profile_1}
                    width="31"
                    alt="Ryan Taylor"
                  />
                </span>
              </a>


              {isOpen && <div className="dropdown-menu d-block" style={{transform: "translate(-126px, 0px)"}}>
                <div className="user-header">
                  <div className="avatar avatar-sm">
                    <img
                      src={profile_1}
                      alt="User Image"
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="user-text">
                    <h6>Ryan Taylor</h6>
                    <p className="text-muted mb-0">Administrator</p>
                  </div>
                </div>
                <a className="dropdown-item" href="profile.html">
                  My Profile
                </a>
                <a className="dropdown-item" href="settings.html">
                  Settings
                </a>
                <a className="dropdown-item" href="login.html">
                  Logout
                </a>
              </div>}
              
            </li>
          </ul> */}

<ul class="nav user-menu">


<li class="nav-item dropdown noti-dropdown">
  <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
    <i class="fe fe-bell"></i> <span class="badge badge-pill">3</span>
  </a>
  <div class="dropdown-menu notifications">
    <div class="topnav-dropdown-header">
      <span class="notification-title">Notifications</span>
      <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
    </div>
    <div class="noti-content">
      <ul class="notification-list">
        <li class="notification-message">
          <a href="#">
            <div class="media">
              <span class="avatar avatar-sm">
                <img class="avatar-img rounded-circle" alt="User Image" src={doc} />
              </span>
              <div class="media-body">
                <p class="noti-details"><span class="noti-title">Dr. Ruby Perrin</span> Schedule <span class="noti-title">her appointment</span></p>
                <p class="noti-time"><span class="notification-time">4 mins ago</span></p>
              </div>
            </div>
          </a>
        </li>
        <li class="notification-message">
          <a href="#">
            <div class="media">
              <span class="avatar avatar-sm">
                <img class="avatar-img rounded-circle" alt="User Image" src={patient} />
              </span>
              <div class="media-body">
                <p class="noti-details"><span class="noti-title">Charlene Reed</span> has booked her appointment to <span class="noti-title">Dr. Ruby Perrin</span></p>
                <p class="noti-time"><span class="notification-time">6 mins ago</span></p>
              </div>
            </div>
          </a>
        </li>
        <li class="notification-message">
          <a href="#">
            <div class="media">
              <span class="avatar avatar-sm">
                <img class="avatar-img rounded-circle" alt="User Image" src={patient} />
              </span>
              <div class="media-body">
              <p class="noti-details"><span class="noti-title">Travis Trimble</span> sent a amount of $210 for his <span class="noti-title">appointment</span></p>
              <p class="noti-time"><span class="notification-time">8 mins ago</span></p>
              </div>
            </div>
          </a>
        </li>
        <li class="notification-message">
          <a href="#">
            <div class="media">
              <span class="avatar avatar-sm">
                <img class="avatar-img rounded-circle" alt="User Image" src={patient} />
              </span>
              <div class="media-body">
                <p class="noti-details"><span class="noti-title">Carl Kelly</span> send a message <span class="noti-title"> to his doctor</span></p>
                <p class="noti-time"><span class="notification-time">12 mins ago</span></p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="topnav-dropdown-footer">
      <a href="#">View all Notifications</a>
    </div>
  </div>
</li>

<li class="nav-item dropdown has-arrow">
  <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
    <span class="user-img"><img class="rounded-circle" src={profile_1} width="31" alt="Ryan Taylor" /></span>
  </a>
  <div class="dropdown-menu">
    <div class="user-header">
      <div class="avatar avatar-sm">
        <img src={profile_1} alt="User Image" class="avatar-img rounded-circle"/>
      </div>
      <div class="user-text">
        <h6>Ryan Taylor</h6>
        <p class="text-muted mb-0">Administrator</p>
      </div>
    </div>
    <a class="dropdown-item" href="profile.html">My Profile</a>
    <a class="dropdown-item" href="settings.html">Settings</a>
    <a class="dropdown-item" href="login.html">Logout</a>
  </div>
</li>


</ul>
        </div>
    
    </>
  )
}

export default Header