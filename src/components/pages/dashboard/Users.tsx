import React, { useEffect, useState } from "react";
import UsersTable from "./UsersTable.tsx";
import axios from "axios";
import toast from "react-hot-toast";
import type { IGetAllUsersResponseTypes } from "../../../utility/types/getAllUsers/getAllUsers";

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
    return (
        <div className="h-screen w-full overflow-hidden px-5 pt-5">
            <UsersTable allUsers={allUsers} />
        </div>
    );
};

export default Users;
