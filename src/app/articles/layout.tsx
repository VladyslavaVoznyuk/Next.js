"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

const ArticlesLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <div>
            <nav>
                <ul>
                    <li className={pathname === "/articles/favorite" ? "active" : ""}>
                        <Link href="/articles/favorite">Favorite</Link>
                    </li>
                    <li className={pathname === "/articles/create" ? "active" : ""}>
                        <Link href="/articles/create">Create</Link>
                    </li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default ArticlesLayout;