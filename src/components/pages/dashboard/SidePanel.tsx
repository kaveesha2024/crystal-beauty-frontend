import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Gauge, LogOut, Package, ShoppingBag, UserRound } from "lucide-react";
import { useDispatch } from "react-redux";
import type { dispatchType } from "../../../../store.ts";
import { signOut } from "../../../utility/slices/AuthSlice.ts";
import Swal from "sweetalert2";
const SidePanel: React.FC = () => {
    const dispatch = useDispatch<dispatchType>();
    const navigate = useNavigate();
    return (
        <div className="sticky top-0 flex h-[100vh] w-[250px] flex-col items-center justify-between px-5">
            <div className="flex h-[200px] w-full flex-col gap-2 pr-5">
                <h2 className="mb-5 pt-5 text-center text-3xl font-bold">Welcome Admin</h2>
                <Link
                    className="active:text-accent hover:text-accent flex items-center gap-1 p-3 transition duration-100 hover:scale-95"
                    to="/dashboard"
                >
                    <Gauge />
                    <p>Dashboard</p>
                </Link>
                <Link
                    className="active:text-accent hover:text-accent flex items-center gap-1 p-3 transition duration-100 hover:scale-95"
                    to="/dashboard/users"
                >
                    <UserRound />
                    Users
                </Link>
                <Link
                    className="active:text-accent hover:text-accent flex items-center gap-1 p-3 transition duration-100 hover:scale-95"
                    to="/dashboard/roducts"
                >
                    <Package />
                    Products
                </Link>
                <Link
                    className="active:text-accent hover:text-accent flex items-center gap-1 p-3 transition duration-100 hover:scale-95"
                    to="/dashboard/orders"
                >
                    <ShoppingBag />
                    Orders
                </Link>
            </div>
            <div className="mb-5 flex w-full flex-col gap-2 pr-5">
                <button
                    onClick={() => {
                        Swal.fire({
                            title: "Are you sure?",
                            text: "Do you want to sign out of your account?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Sign Out",
                        }).then(result => {
                            if (result.isConfirmed) {
                                dispatch(signOut());
                                navigate("/");
                            }
                        });
                    }}
                    className="active:text-accent hover:text-accent flex cursor-pointer items-center gap-1 p-3 transition duration-100 hover:scale-95"
                >
                    <LogOut />
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default SidePanel;
