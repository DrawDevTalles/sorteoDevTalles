import React, { useState } from "react";
// import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
//import { postLogin } from "../../reduxToolkit/Login/loginThunks";
// import { getUserByUsername } from "../../reduxToolkit/User/userThunks";
import { useNavigate } from "react-router-dom";
//import Cookies from "js-cookie";
// import LoginButton from "../LoginButton";
import { NavLink} from "react-router-dom";
// import Swal from 'sweetalert2'

function LogIn() {
  
    return (
     <div>
  <div >
      <h1 >
        Iniciar Sesión
      </h1>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            <label >Usuario</label>
            <input
              type="text"
              name="username"
              placeholder="Ingrese su usuario"
              value={input.username}
              onChange={handleChange}
              />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Ingrese su Contraseña"
              value={input.password}
              onChange={handleChange}
             />
          </div>
          <button
            type="submit"
            >
            Enviar
          </button>
          <div>
            <span>¿No tiene una cuenta?</span>
            <NavLink to="/userform">
              <span>Regístrese</span>
            </NavLink>
          </div>
          <div>
              <span onClick={navigateRecovery}>¿Olvidó su contraseña?</span>
          </div>
          <div >---------- o ---------- </div>
          <div>
            <LoginButton />
          </div>
        </div>
      </form>
    </div>


     </div>
    )
  }
  
  export default LogIn



/* function UserLogin() {
 
  

    try {
      const response = await dispatch(postLogin(loginData));

      const { message, access, userSession } = response.data;
      Swal.fire({
        title: '¡Inicio exitoso!',
        text: message,
        icon: 'success',
        confirmButtonColor: "#E62F05",
        confirmButtonText: 'Ok'});

      if (access && userSession) {
        handleSuccessfulLogin(userSession);

        if (userSession.role === "admin") {
          navigate("/dashboard");
        } else if (userSession.role === "cliente") {
          navigate("/");
        }
      }
    } catch (error) {
      setTimeout(() => {
         const userClickedOk = Swal.fire({
          title: "Error",
          text: "Usuario NO registrado o deshabilitado. ¿Quieres ir a la página de registro?",
          icon: "error",
          showCancelButton: true,
          confirmButtonColor: "#E62F05",
          cancelButtonColor: "#404145",
          confirmButtonText: "Aceptar",
          cancelButtonText: "Cancelar"
        }).then((result) => {
          if (result.isConfirmed) {
            
              navigate("/userform");
            
          }
        });
             
      }, 1000);
    }
  };

  const navigateRecovery = async () => {
    if (input.username) {
      try {
        
        //const actionResult = await dispatch(getUserByUsername(input.username));
        const response = await axios.get(`https://drewili-pf-back.onrender.com/user/username?username=${input.username}`)
        
       
        response.status && response.status === 200
        
          navigate('/forgetpassword', { state: input })
       
      } catch (error) {
        console.error("Error al obtener el usuario por nombre de usuario:", error)
        Swal.fire({
          title: '¡Error!',
          text: "Usuario no encontrado.",
          icon: 'error',
          confirmButtonColor: "#E62F05",
          confirmButtonText: 'Ok'});
      }
    } else {
      Swal.fire({
        title: 'Atención',
        text: "Por favor, ingrese su nombre de usuario.",
        icon: 'warning',
        confirmButtonColor: "#E62F05",
        confirmButtonText: 'Ok'});
      
    }
  };
  
  return (
    
  );
}

*/