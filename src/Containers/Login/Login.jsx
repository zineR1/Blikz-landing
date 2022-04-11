import React from "react";
// import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import styles from "./Login.module.css";
import logo from '../../assets/logo.png';
// import { errorModal, loading, login } from "../../redux/actions";
// import Loader from "../Loader/Loader";
// import Error from "./ErrorPopUp/Error";
// import loginValidate from "./controllers/loginValidator";
import { Footer} from "../../Components";

const Login = () => {
  // const dispatch = useDispatch();
  // const globalState = useSelector((state) => state);
  // const [errors, setErrors] = useState({});

  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInput({
      ...input, //ademas de lo que tiene
      [e.target.name]: e.target.value, //agregale lo que el usuario pone
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("El dashboard está siendo creado pronto tendrás acceso a el!")
  }
    //si ambos campos están vacíos
    // if (input.email === "" || input.password === "") {
    //   return setErrors(loginValidate(input));
    // }

    //si las props de error poseen algun valor, haveError será true
    // const haveError = Object.values(errors).some((v) => v !== undefined);

  //   if (haveError === false) {
  //     loading(dispatch, true);
  //     const credential = login(dispatch, input.email, input.password);
  //     credential.then((re) => {
  //       re
  //         ? (window.location.href = "/admin/home")
  //         : errorModal(dispatch, true);
  //     });
  //   } else alert("There are still errors in the fields");
  // }

  // function errorsHandler(e) {
  //   // console.log("errorH", e.target.name);
  //   let form = { [e.target.name]: input[e.target.name] };
  //   let fails = loginValidate(form);
  //   setErrors((prev) => ({ ...prev, ...fails }));
  // }

  // useEffect(() => {
  //   login(dispatch)
  //     .then((res) => {
  //       res ? navigate("/admin/home") : console.log("data.login es false", res);
  //     })
  //     .catch((err) => console.log("Error en useEffect Login", err));
  //   loading(dispatch, false);
  // }, []);

  return (
    <div className={styles.gral}>
      
      <div className={styles.text}>
      <Link to="/"> 
        <img src={logo} alt='logo' height="48px" width="110px"/>
        </Link>
      <h1>¡Bienvenido de vuelta!</h1>
      <p>Ingresá tus datos y navegá el dashboard de tu tienda de nuevo</p>
      </div>
      {/* ---------loader-------- */}
      {/* {globalState.loading && <Loader />} */}
      <div className={styles.form_div}>
      <div className={styles.form1}>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
   
          <div className={styles.input_div}>
          <label>Correo electrónico</label>
            <input
              type="text"
              value={input.email}
              name="email"
              placeholder="nombre@correo.com"
              onChange={(e) => {
                handleChange(e);
              }}
              // onBlur={(e) => errorsHandler(e)}
            />{" "}
            <br />
            {/* {errors && <small>{errors.email}</small>} */}
          </div>
          <br />
          <div className={styles.input_div1}>
            <label>Contraseña</label>
            <input
              type="password"
              value={input.password}
              name="password"
              placeholder="••••••• "
              onChange={(e) => {
                handleChange(e);
              }}
              // onBlur={(e) => errorsHandler(e)}
            />{" "}
            <br />
            {/* {errors && <small>{errors.password}</small>} */}
            <div className={styles.restPassword}>
              <Link className={styles.link} to="/admin/restorePassword">
                Forgot your password?
              </Link>
            </div>
          </div>
          <button className={styles.btn} type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default Login;