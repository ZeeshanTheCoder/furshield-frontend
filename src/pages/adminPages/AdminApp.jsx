import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminSidebar from "../../components/adminComponents/AdminSidebar";
import DashboardPage from "./DashboardPage";
import UsersManagementPage from "./UsersManagementPage";
import ListProducts from "./ListProducts";

const AdminApp = () => {
    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <Routes>
                <Route path="/" element={<AdminSidebar />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="users" element={<UsersManagementPage />} />
                    <Route path="products" element={<ListProducts />} />
                    <Route
                        path="*"
                        element={<div className="p-10 text-center">404 - Page Not Found</div>}
                    />
                </Route>
                <Route path="*" element={<Navigate to="/admin" replace />} />
            </Routes>
        </>
    );
};

export default AdminApp;
