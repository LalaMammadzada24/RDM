import React, { useState, useEffect } from 'react'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    useEffect(() => {
        import('bootstrap');
    }, []);

    
    return (

        <div className='login d-flex justify-content-center align-items-center'>
            <div className="center-box d-flex">
                <div className="right-box d-flex justify-content-center align-items-center flex-column">
                    <h2>Yenidən Xoş Gəldiniz!</h2>
                    <p>Daxil olmaq üçün məlumatlarınızı daxil edin!</p>
                </div>
                <div className="left-box">
                    <h2>Daxil ol</h2>
                    <form>
                        <div className="input-box position-relative">
                            <i className="fa-solid fa-user position-absolute "></i>
                            <input type="text" placeholder='İstifadəçi adı' className="form-control " id="exampleInputname" />
                        </div>
                        <div className="input-box position-relative">
                            <i className="fa-solid fa-lock position-absolute"></i>
                            <input type={showPassword ? 'text' : 'password'} placeholder='Şifrə' className="form-control" id="exampleInputPassword1" />
                            <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} position-absolute`} onClick={togglePassword}></i>
                        </div>
                        <div className="button-box d-flex align-items-center justify-content-between">
                            <p data-bs-toggle="modal"
                                data-bs-target="#forgotPasswordModal">Şifrəmi Unutmuşam!</p>
                            <button type="submit" className="btn ">Daxil ol</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 pb-0">
                            <div className='d-flex justify-content-center align-items-center flex-column mx-auto'>
                            <h5 className="modal-title" id="forgotPasswordModalLabel">Şifrəni Yenilə</h5>
                            <p>Zəhmət olmasa email adresinizi daxil edin:</p>
                            </div>
                            <button type="button" className="btn-close ms-0 mb-4 me-1" data-bs-dismiss="modal" aria-label="Bağla"></button>
                        </div>
                        <div className="modal-body my-0 py-0 px-4 position-relative">
                        <i className="fa-solid fa-envelope my-auto"></i>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="modal-footer border-0 mb-3 ps-4 pe-3">
                            <button type="button" className="col-lg-12 btn">Göndər</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login