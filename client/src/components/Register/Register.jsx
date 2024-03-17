function Register() {

    return (
        <div>
            <form>
                <h2> Formulario de Registro </h2>
                <div className="mb-4">
                    <label className="block text-chiliRed mb-2">Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ingrese su nombre"
                        value={input.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className="border rounded p-3 w-full bg-whiteSmoke focus:outline-none"
                    />
                    <div className="h-4">
                        <span className="text-chiliRed text-opacity-60 items-center flex text-sm">
                            {errors?.name}
                        </span>
                    </div>
                <label className="block text-chiliRed mb-2">Apellido:</label>
            <input
              type="text"
              name="lastname"
              placeholder="Ingrese su apellido"
              value={input.lastname}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="border rounded p-3 w-full bg-whiteSmoke focus:outline-none"
            />
            <div className="h-4">
              <span className="text-chiliRed text-opacity-60 items-center flex text-sm">
                {errors?.lastname}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-chiliRed mb-2">
              Correo Electrónico:
            </label>
            <input
              type="text"
              name="email"
              placeholder="Ingrese su correo electrónico"
              value={input.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="border rounded p-3 w-full bg-whiteSmoke focus:outline-none"
            />
            <div className="h-4">
              <span className="text-chiliRed text-opacity-60 items-center flex text-sm">
                {errors?.email}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-chiliRed mb-2">Contraseña:</label>
            <input
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={input.password}
              onChange={handleInputChange}
              className="border rounded p-3 w-full bg-whiteSmoke focus:outline-none"
            />
            <ul className="list-disc text-onyx pl-6 mt-2 border rounded-md p-4">
              <li className="rounded-md text-sm">
                Debe tener una longitud mínima de 8 caracteres
              </li>
              <li className="rounded-md text-sm">
                Debe contener al menos una minúscula
              </li>
              <li className="rounded-md text-sm">
                Debe contener al menos una mayúscula
              </li>
              <li className="rounded-md text-sm">
                Debe contener al menos un dígito
              </li>
              <li className="rounded-md text-sm">
                Debe contener al menos un símbolo
              </li>
            </ul>

            <div className="h-4">
              <span className="text-chiliRed text-opacity-60 items-center flex text-sm">
                {errors?.password}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-chiliRed mb-2">Usuario de discord:</label>
            <input
              type="text"
              name="address"
              placeholder="Ingrese su dirección"
              value={input.address}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="border rounded p-3 bg-whiteSmoke focus:outline-none w-full"
            />
          </div>
          <div className="mx-auto">
            <ReCAPTCHA
              sitekey="6Lee-E0pAAAAABEFRPClDMwRwWlf5dJXyhfeVwDr"
              onChange={handleIsCaptcha}
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-chiliRed text-whiteSmoke py-3 px-6 rounded-full w-full"
            >
              Regístrate
            </button>
          </div>
          
            </form >



        </div >
    )
}

export default Register