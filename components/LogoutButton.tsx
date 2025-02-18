"use client";
import { logout } from "@/actions/logout";
import { Button } from "./ui/button";

interface LogoutButtonProps {
  children?: React.ReactNode;
}
export default function LogoutButton({ children }: LogoutButtonProps) {
  const onClick = () => {
    logout();
  };
  return <Button onClick={onClick}>{children}</Button>;
}
