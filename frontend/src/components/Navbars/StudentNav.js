import React from "react";
import { Link } from "react-router-dom";

export default function StudentNav() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
    <>
    <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Link to="/" className="text-gray-700 text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap ">
                    Elearn Site
                </Link>
                <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className={"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" + (navbarOpen ? " block" : " hidden") } id="example-navbar-warning" >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li className="flex items-center">
                        <Link className="hover:text-gray-700 text-gray-500 px-3 py-4 lg:py-2 flex items-center text-xs  font-bold" to="/"  >
                            <i className="fa fa-home text-lg leading-lg " />
                            <p  className="text-sm inline-block ml-2">Home</p>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link className="hover:text-gray-700 text-gray-500 px-3 py-4 lg:py-2 flex items-center text-xs  font-bold" to="/admin/dashboard"  >
                            <p className="text-sm inline-block ml-2">Admin</p>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link className="hover:text-gray-700 text-gray-500 px-3 py-4 lg:py-2 flex items-center text-xs  font-bold" to="/student/index" >
                            <p className=" text-sm inline-block ml-2">Students</p>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link to="/auth/login" className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold  px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                            <i class="fas fa-sign-in-alt"></i> Sign In
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <Link to="/auth/register" className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold  px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                            <i class="fa fa-user-plus" aria-hidden="true"></i> Register
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
    );
}
