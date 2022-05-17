/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";

function Connexion() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [token, setToken] = useState(null);

  // update user email and password when inputs are changed
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:5005/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log(data);
    setToken(data.data.accessToken);
    if (res.status === 400) {
      alert("Mot de passe ou email incorrect");
    } else {
      data.status === true
        ? alert("Login Successful - redirection to the administration page")
        : alert("Login Failed");
    }
  };

  return token !== null ? (
    <div className="h-screen bg-sky-600">
      <h1 className="pt-20 text-3xl text-center text-white ">
        Félicitations, vous avez maintenant accès à ce super GIF :
      </h1>
      <div className="flex justify-center mt-20">
        <iframe
          src="https://giphy.com/embed/EoH4Wpu8suiNTLpI6j"
          width="480"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
      </div>
    </div>
  ) : (
    <div className="h-screen bg-sky-900">
      <h1 className="pt-20 text-3xl text-center text-white ">
        Formulaire de connexion
      </h1>
      <div className="flex flex-col w-8/12 mt-20 ml-auto mr-auto">
        <label className="mb-2 text-xl text-white bold" htmlFor="name">
          Email
        </label>
        <input
          onChange={(e) => handleChange(e)}
          className="h-8 rounded"
          type="text"
          id="email"
          name="email"
        />
        <label className="mt-8 mb-2 text-xl text-white bold" htmlFor="password">
          Mot de passe
        </label>
        <input
          onChange={(e) => handleChange(e)}
          className="h-8 rounded"
          type="password"
          id="password"
          name="password"
        />
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="p-2 mt-8 text-white bg-green-500 rounded w-28"
        >
          Connexion
        </button>
      </div>
    </div>
  );
}

export default Connexion;
