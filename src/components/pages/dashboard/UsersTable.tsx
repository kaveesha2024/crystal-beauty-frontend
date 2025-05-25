import React from "react";
import { Delete, UserPen } from "lucide-react";
import type { IUsersTableProps } from "../../../utility/types/getAllUsers/getAllUsers";
const UsersTable: React.FC<IUsersTableProps> = ({ allUsers }) => {
    console.log(allUsers);
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            User ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            First Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            role
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Verification Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Home Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Profile Picture
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status (Block / Unblock)
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                        <td className="px-6 py-4">Dummy Data</td>
                        <td className="px-6 py-4">Dummy Data</td>
                        <td className="px-6 py-4">Dummy Data</td>
                        <td className="px-6 py-4">Dummy Data</td>
                        <td className="px-6 py-4">Dummy Data</td>
                        <td className="px-6 py-4">Dummy Data</td>
                        <td className="px-6 py-4">Dummy Data</td>
                        <td className="px-6 py-4">Dummy Data</td>
                        <td className="px-6 py-4">Dummy Data</td>
                        <td className="px-6 py-4">Dummy Data</td>
                        <td className="flex gap-2 px-6 py-4">
                            <button className="hover:text-accent cursor-pointer text-blue-600 transition duration-100 hover:scale-95 active:text-black">
                                <UserPen />
                            </button>
                            <button className="hover:text-accent cursor-pointer text-red-600 transition duration-100 hover:scale-95 active:text-black">
                                <Delete />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
