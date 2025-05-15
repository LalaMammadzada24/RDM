import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

const Table = ({ id }) => {
    const tableRef = useRef(null);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const limit = 10;

    const fetchData = async (page) => {
        setLoading(true);
        try {
           // const token = localStorage.getItem("access_token");

            const response = await axios.get(
                `http://100.42.188.53:9530/authorities?page=0&pageSize=20`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        page,
                        limit,
                    },
                }
            );

            const { data: items, totalPages } = response.data;
            setData(items);
            setTotalPages(totalPages);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="col-12 col-sm-12 col-md-10 mt-lg-5">
            <div className="table" ref={tableRef}>
                <div className="top-box d-flex justify-content-between">
                    <h2>Hüquqlar</h2>
                    <div className="btn-box my-auto">
                        <button className="reset btn">
                            <i className="fa-solid fa-rotate-left me-2"></i>Cədvəli bərpa et
                        </button>
                        <button className="edit btn">
                            <i className="fa-solid fa-pen me-2"></i>Redaktə et
                        </button>
                        <button className="add btn">
                            <i className="fa-solid fa-plus me-2"></i>Əlavə et
                        </button>
                        <button className="delete btn">
                            <i className="fa-solid fa-trash me-2"></i>Sil
                        </button>
                    </div>
                </div>

                <div className="table-main">
                    <table className="table table-striped">
                        <thead className="table-light">
                            <tr className="title">
                                <th>ID</th>
                                <th>Hüquq</th>
                                <th>Açıqlama</th>
                                <th>Superadmin</th>
                                <th>Admin</th>
                                <th>Employee</th>
                                <th>Patient</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="7">Yüklənir...</td>
                                </tr>
                            ) : data.length > 0 ? (
                                data.map((item) => (
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.huquq}</td>
                                        <td>{item.aciqlama}</td>
                                        <td>{item.superadmin ? "Bəli" : "Xeyr"}</td>
                                        <td>{item.admin ? "Bəli" : "Xeyr"}</td>
                                        <td>{item.employee ? "Bəli" : "Xeyr"}</td>
                                        <td>{item.patient ? "Bəli" : "Xeyr"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">Məlumat yoxdur</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="pagination d-flex justify-content-end mt-3 gap-2">
                    <button
                        className="btn"
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                    >
                        <i className="fa-solid fa-arrow-left"></i>Əvvəlki
                    </button>

                    <button
                        className="btn"
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Növbəti
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;
