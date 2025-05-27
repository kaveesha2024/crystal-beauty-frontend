import React, { useEffect, useState } from "react";
import UsersTable from "./UsersTable.tsx";
import axios from "axios";
import toast from "react-hot-toast";
import type { IGetAllUsersResponseTypes } from "../../../utility/types/getAllUsers/getAllUsers";
import Swal from "sweetalert2";

const Users: React.FC = () => {
    const [allUsers, setAllUsers] = useState<IGetAllUsersResponseTypes[]>([]);
    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        try {
            const response = await axios.get("/api/get-all-users");
            setAllUsers(response.data?.message);
        } catch (error) {
            toast.error("something went wrong.");
        }
    };
    const handleDeleteUser = async (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async result => {
            if (result.isConfirmed) {
                try {
                    const toastId = toast.loading("Deleting user...");
                    const response = await axios.delete(`/api/delete-user?userId=${id}`);
                    toast.dismiss(toastId);
                    if (response.data.status === 200) {
                        getUsers();
                        toast.success("User deleted successfully");
                        return;
                    }
                    toast.error(response.data.message);
                } catch (error) {
                    toast.error("something went wrong.");
                }
                await Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            }
        });
    };
    return (
        <div className="h-screen w-full overflow-hidden px-5 pt-5">
            <UsersTable allUsers={allUsers} handleDeleteUser={handleDeleteUser} />
        </div>
    );
};

export default Users;
