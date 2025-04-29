"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ActiveLink from "@/components/ActiveLink";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <ActiveLink href="/articles">Articles</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/profile/settings">Settings</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/profile/security">Security</ActiveLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;