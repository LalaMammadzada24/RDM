import React, { useRef, useEffect }  from 'react';

const Table = () => {
    const tableRef = useRef(null);

    useEffect(() => {
        const table = tableRef.current;
        if (!table) return;

        let pressed = false;
        let startX;
        let startWidth;
        let currentTh;

        const onMouseMove = (e) => {
            if (!pressed || !currentTh) return;
            const diffX = e.clientX - startX;
            currentTh.style.width = `${startWidth + diffX}px`;
        };

        const onMouseUp = () => {
            pressed = false;
            currentTh = null;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        const setupResizers = () => {
            const headers = table.querySelectorAll('thead tr.title th');
            const initialWidths = [120, 270, 320, 120, 120, 120, 120];

            headers.forEach((th, index) => {
                th.style.width = `${initialWidths[index]}px`;

                if (th.querySelector('.resizer')) return;

                const resizer = document.createElement('div');
                resizer.className = 'resizer';
                resizer.style.position = 'absolute';
                resizer.style.top = '0';
                resizer.style.right = '0';
                resizer.style.width = '5px';
                resizer.style.height = '100%';
                resizer.style.cursor = 'col-resize';
                resizer.style.userSelect = 'none';
                resizer.style.zIndex = '10';

                resizer.addEventListener('mousedown', (e) => {
                    pressed = true;
                    startX = e.clientX;
                    currentTh = th;
                    startWidth = th.offsetWidth;

                    document.addEventListener('mousemove', onMouseMove);
                    document.addEventListener('mouseup', onMouseUp);
                });

                th.style.position = 'relative';
                th.appendChild(resizer);
            });
        };

        setupResizers();
    }, []);
    
    return (
        <div className="col-12 col-sm-12 col-md-10 mt-lg-5">
            <div className="table" ref={tableRef}>
                <div className="top-box d-flex justify-content-between">
                    <h2>Hüquqlar</h2>
                    <div className="btn-box my-auto">
                        <button className="reset btn">
                            <i className='fa-solid fa-rotate-left me-3'></i>Cədvəli bərpa et
                        </button>
                        <button className="edit btn">
                            <i className='fa-solid fa-pen me-3'></i>Redaktə et
                        </button>
                        <button className="add btn">
                            <i className='fa-solid fa-plus me-3'></i>Əlavə et
                        </button>
                        <button className="delete btn">
                            <i className='fa-solid fa-trash me-3'></i>Sil
                        </button>
                    </div>
                </div>
                <div className="table-main">
                    <table className="table table-striped">
                        <thead className="table-light">
                            <tr className='title'>
                                <th>ID</th>
                                <th>Hüquq</th>
                                <th>Açıqlama</th>
                                <th>Superadmin</th>
                                <th>Admin</th>
                                <th>Employee</th>
                                <th>Patient</th>
                            </tr>
                            <tr>
                                <td><input className="input-id form-control form-control-sm" /></td>
                                <td><input className="input-huquq form-control form-control-sm" /></td>
                                <td><input className="input-aciqlama form-control form-control-sm" /></td>
                                <td><input className="input-superdmin form-control form-control-sm" /></td>
                                <td><input className="input-admin form-control form-control-sm" /></td>
                                <td><input className="input-employee form-control form-control-sm" /></td>
                                <td><input className="input-patient form-control form-control-sm" /></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@social</td>
                                <td>@social</td>
                                <td>@social</td>
                                <td>@social</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
