"use client";

import { logout } from "@/action/auth-action";
import { useRouter } from "next/navigation"; // Note: 'next/router' is for pages router
import toast from "react-hot-toast";

export function LogoutButton() {
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      toast.success("Logout Sucessfully!", error);
    }
  };

  return (
    <form
      action={() => {
        void handleLogout();
      }}
    >
      <button type="submit">Logout</button>
    </form>
  );
}