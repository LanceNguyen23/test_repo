import { useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from "../../context/AuthProvider";

// import axios from '../../api/axios';
import './index.css'
import HomePages from '../home/pages/HomePages';
import { useNavigate } from 'react-router-dom';
const LOGIN_URL = '/auth';

const Login = () => {
    // const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate() 

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(user, pwd);
        navigate("/home");
        // try {
        //     const response = await axios.post(LOGIN_URL,
        //         JSON.stringify({ user, pwd }),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     );
        //     console.log(JSON.stringify(response?.data));
        //     //console.log(JSON.stringify(response));
        //     const accessToken = response?.data?.accessToken;
        //     const roles = response?.data?.roles;
        //     setAuth({ user, pwd, roles, accessToken });
        //     setUser('');
        //     setPwd('');
        //     setSuccess(true);
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //     } else if (err.response?.status === 401) {
        //         setErrMsg('Unauthorized');
        //     } else {
        //         setErrMsg('Login Failed');
        //     }
        //     errRef.current.focus();
        // }
    }

    return (
        <div className='body'>
            
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>????ng Nh???p</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">T??n ????ng nh???p:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">M???t kh???u:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>????ng Nh???p</button>
                    </form>
                    <p>
                        C???n m???t t??i kho???n?<br />
                        <div className="path">
                            <span className="line">
                                {/*put router link here*/}
                                <a href="/register">????ng k??</a>
                            </span>
                            <span className="line">
                                {/*put router link here*/}
                                <a href="/home">Trang ch???</a>
                            </span>
                        </div>
                    </p>
                </section>
        </div>
    )
}

export default Login