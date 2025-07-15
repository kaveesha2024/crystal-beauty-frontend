export const userTableHeaders = [
    "User Id",
    "First Name",
    "Last Name",
    "Email",
    "role",
    "Verification Status",
    "Phone Number",
    "Home Address",
    "Profile Picture",
    "Status (Block / Unblock)",
    "Action",
];
export const formFields = [
    {
        label: "First Name",
        name: "firstName",
        type: "text",
    },
    {
        label: "Last Name",
        name: "lastName",
        type: "text",
    },
    {
        label: "Email",
        name: "email",
        type: "email",
    },
    {
        label: "Home Address",
        name: "address",
        type: "text",
    },
    {
        label: "Phone Number",
        name: "phoneNumber",
        type: "text",
    },
];
export const headings = [
    "Product Id",
    "Product Name",
    "Product Price",
    "Labelled Price",
    "Discount",
    "Stock",
    "Warranty",
    "Alternative Names",
    "Description",
    "Brand",
    "In Stock",
    "Product Image",
    "Action",
];
export const inputClassName =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-[#1e1e19] focus:ring-2 focus:ring-[#D50B8B] focus:outline-none";
export const orderTableHeader = [
    "Order ID",
    "Customer Name",
    "Product Count",
    "Total Price",
    "Status",
];
export const orderStatusOptions = [
    { value: "pending", color: "text-yellow-800" },
    { value: "processing", color: "bg-blue-100 text-blue-800" },
    { value: "delivered", color: "bg-green-100 text-green-800" },
    { value: "returned", color: "bg-purple-100 text-red-800" },
    { value: "cancelled", color: "bg-red-100 text-red-800" },
];

export const statusRing = {
    pending: "border-yellow-400 shadow-yellow-100",
    processing: "border-blue-400 shadow-blue-100",
    returned: "border-red-400 shadow-red-100",
    delivered: "border-green-400 shadow-green-100",
    cancelled: "border-red-400 shadow-red-100",
};
export const statusColor = (status: string): string => {
    if (status === "pending") {
        return "bg-yellow-100 text-yellow-800";
    }
    if (status === "delivered") {
        return "bg-green-100 text-green-800";
    }
    if (status === "cancelled") {
        return "bg-red-100 text-red-800";
    }
    if (status === "returned") {
        return "bg-purple-100 text-purple-800";
    }
    return "bg-blue-100 text-blue-800";
};

export const paymentIcon = (method: string): "💵" | "💳" | "🔵" => {
    if (method === "cashOnDelivery") {
        return "💵";
    }
    if (method === "creditCard") {
        return "💳";
    }
    return "🔵";
};
