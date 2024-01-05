import React from 'react'
import useAuthHooks from '../../hooks/useAuthHooks'

const PageHeader = ({title}) => {

    const {user} = useAuthHooks()
  return (
    <div className="page-header">
    <div className="row">
      <div className="col-sm-12">
        <h3 className="page-title">Welcome {user?.name}!</h3>
        <ul className="breadcrumb">
          <li className="breadcrumb-item active">{title}</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default PageHeader