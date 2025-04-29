"use client";
import ActiveLink from "@/components/ActiveLink";

const ArticlesNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <ActiveLink href="/articles/favorite">Favorite</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/articles/create">Create</ActiveLink>
                </li>
            </ul>
        </nav>
    );
};

export default ArticlesNav;