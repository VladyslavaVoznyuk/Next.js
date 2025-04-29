"use client";

import FavoriteArticle from "@/components/FavoriteArticle";

const favoriteIds = [1, 3, 5];

export default function FavoriteArticles() {
    return (
        <div>
            <h1>Улюблені статті</h1>
            {favoriteIds.map((id) => (
                <FavoriteArticle key={id} id={id} />
            ))}
        </div>
    );
}
