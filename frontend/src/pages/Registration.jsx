import React, { useState } from "react";

function Connexion() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

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
    const res = await fetch("http://localhost:5005/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log(data);
    data.status === true ? alert("Registration Successful - redirection to the administration page") : "Registration Failed";
  };

  return (
    <div className="h-screen bg-cyan-900">
      <h1 className="pt-20 text-3xl text-center text-white ">
        Création de compte
      </h1>
      <div className="flex flex-col w-8/12 mt-20 ml-auto mr-auto">
        <label className="mb-2 text-xl text-white bold" htmlFor="name">
          Nom
        </label>
        <input
          onChange={(e) => handleChange(e)}
          className="h-8 rounded"
          type="text"
          id="name"
          name="name"
        />
        <label className="mt-8 mb-2 text-xl text-white bold" htmlFor="email">
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
          className="p-2 mt-8 text-white bg-red-500 rounded w-28"
        >
          S&apos;enregistrer
        </button>
      </div>
    </div>
  );
}

export default Connexion;
