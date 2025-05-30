import React from "react";
import { Delete, UserPen } from "lucide-react";
import type {
    IGetAllUsersResponseTypes,
    IUsersTableProps,
} from "../../../utility/types/getAllUsers/getAllUsers";
import TableHeader from "../../../utility/reUsable/TableHeader.tsx";
import { userTableHeaders } from "../../../utility/others/refactor.ts";
import { useNavigate } from "react-router-dom";
import LoadingTableRow from "../../../utility/reUsable/LoadingTableRow.tsx";
const UsersTable: React.FC<IUsersTableProps> = ({ allUsers, handleDeleteUser }) => {
    const navigate = useNavigate();
    return (
        <div className="relative">
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {userTableHeaders.map((userTableHeader: string, index: number) => (
                            <TableHeader key={index} header={userTableHeader} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {allUsers.length > 0 ? (
                        allUsers.map((user: IGetAllUsersResponseTypes, index: number) => {
                            return (
                                <tr
                                    key={index}
                                    className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <td className="px-6 py-4">{user.userId}</td>
                                    <td className="px-6 py-4">{user.firstName}</td>
                                    <td className="px-6 py-4">{user.lastName}</td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    {user.role === "admin" ? (
                                        <td className="px-6 py-4 text-red-500">{user.role}</td>
                                    ) : (
                                        <td className="px-6 py-4 text-green-400">{user.role}</td>
                                    )}
                                    {user.isVerified ? (
                                        <td className="px-6 py-4 text-green-400">verified</td>
                                    ) : (
                                        <td className="px-6 py-4 text-red-500">Non Verified</td>
                                    )}
                                    <td className="px-6 py-4">{user.phoneNumber}</td>
                                    <td className="px-6 py-4">{user.address}</td>
                                    <td className="px-6 py-4">
                                        <img
                                            className={
                                                "h-[50px] w-[50px] rounded-full object-cover"
                                            }
                                            src={user.profilePicture}
                                            alt="image"
                                        />
                                    </td>
                                    {user.isBlocked ? (
                                        <td className="px-6 py-4 text-red-500">Blocked</td>
                                    ) : (
                                        <td className="px-6 py-4 text-green-400">active</td>
                                    )}
                                    <td className="flex gap-2 px-6 py-4">
                                        <button
                                            onClick={() => {
                                                navigate(`update/${user.userId}`, {
                                                    state: {
                                                        user,
                                                    },
                                                });
                                            }}
                                            className="hover:text-accent cursor-pointer text-blue-600 transition duration-100 hover:scale-95 active:text-black"
                                        >
                                            <UserPen />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteUser(user.userId)}
                                            className="hover:text-accent cursor-pointer text-red-600 transition duration-100 hover:scale-95 active:text-black"
                                        >
                                            <Delete />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr className="border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                            <LoadingTableRow />
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
