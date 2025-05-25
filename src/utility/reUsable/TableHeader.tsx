import React from "react";
interface ITableHeaderPropsTypes {
    header: string;
}
const TableHeader: React.FC<ITableHeaderPropsTypes> = ({ header }) => {
    return (
        <th scope="col" className="px-6 py-3">
            {header}
        </th>
    );
};

export default TableHeader;
