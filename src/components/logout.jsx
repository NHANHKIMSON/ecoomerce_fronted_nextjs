// components/logout-button.tsx
"use client";

import { logout } from "@/action/auth-action";

export function LogoutButton() {
  return (
    <form action={logout}>
      <button type="submit">
        Logout
      </button>
    </form>
  );
}