import React from 'react'
import logo from "../assets/img/rdmlogo.png"
import Table from '../Components/Table'
const SuperAdmin = () => {
    return (
        <div className="super_admin px-3">
            <div className="row">
            <div className="sidebar col-12 col-sm-12 col-md-2 mt-lg-4 position-relative" style={{ height: '100vh', overflow: 'hidden' }}>
                    <div className="d-flex flex-column p-3" style={{ height: '100%' }}>
                        <div className="sidebar-head d-flex align-items-center me-md-auto">
                            <img src={logo} alt="err" />
                            <h2 className="my-auto ms-2">RDM | Uzmanlar</h2>
                        </div>
                        <a href="#" className="list-group-item list-group-item-action d-flex gap-3" aria-current="true">
                            <i className="fa-solid fa-user"></i>
                            <div>
                                <h6 className="mb-0">Username</h6>
                                <p className="mb-0 mt-0">Super-Admin</p>
                            </div>
                        </a>
                        <ul className="nav nav-pills flex-column mt-4 gap-2">
                            <h1 className="ms-3">Ümumi</h1>
                            <li>
                                <a href="#" className="nav-link link-body-emphasis">
                                    <i className="fa-solid fa-scale-unbalanced me-1"></i>
                                    <span>Hüquqlar</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link link-body-emphasis d-flex align-items-center">
                                    <i className="fa-solid fa-hospital me-1"></i>
                                    <span className="">Xəstəxanalar</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link link-body-emphasis">
                                    <i className="fa-solid fa-user-nurse fs-4 me-2"></i>
                                    <span>İşçi tipləri</span>
                                </a>
                            </li>
                        </ul>
                        <button type="button" className="logout btn d-flex justify-content-center align-items-center position-absolute mb-5">
                            <i className="fa-solid fa-right-from-bracket me-2"></i>
                            Çıxış
                        </button>
                    </div>
                </div>
                <Table/>
            </div>
        </div>

    )
}

export default SuperAdmin