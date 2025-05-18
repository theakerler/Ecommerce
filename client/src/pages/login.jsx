import React, { useState } from "react";
import Navbar from "../components/Navbar/NavBar";
import { Typography, Input, Button, Card } from "@material-tailwind/react";
import imagen1 from "../assets/images/login/imagen1.webp";
import imagen2 from "../assets/images/login/imagen2.webp";


export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de login
    alert("Login enviado");
  };

  return (
    <>
    <div className="h-screen w-screen overflow-hidden ">
      <Navbar className="border border-black"/>
      <div className="flex h-full items-center justify-center ">
        <div className="w-1/2 h-full border border-black relative flex justify-center items-start py-10">
            <div className="w-3/4 h-3/4 flex justify-end items-center border border-black">
                <img src={imagen1} alt="Imagen1" className="w-[400px]  absolute  "/>
            </div>
            <div className="w-1/2 h-full flex justify-start items-center">
                <img src={imagen2} alt="Imagen2" className="w-[350px] absolute  "/>
            </div>
        </div>

        <div className="w-1/2 h-full border border-black flex justify-center items-start">
            <div className=" flex justify-center items-center h-3/4 border border-black w-full">
                <Card className="w-full max-w-sm p-6 shadow-lg">
                <Typography variant="h4" color="blue-gray" className="mb-6 text-center">
                    Iniciar Sesión
                </Typography>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    />
                    <Input
                    label="Contraseña"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    />
                    <Button type="submit" color="red" className="mt-4">
                    Ingresar
                    </Button>
                </form>
                </Card>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}