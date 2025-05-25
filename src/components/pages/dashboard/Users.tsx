import React from "react";
import UsersTable from "./UsersTable.tsx";

const Users: React.FC = () => {
    return (
        <div className="h-screen w-full px-5 pt-5">
            <UsersTable />
        </div>
    );
};

export default Users;
