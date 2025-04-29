"use client";

import { useEffect, useState } from "react";

type FavoriteArticleProps = {
    id: number;
};

type Article = {
    id: number;
    title: string;
    body: string;
};

export default function FavoriteArticle({ id }: FavoriteArticleProps) {
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setArticle(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Завантаження статті {id}...</p>;

    return (
        <div>
            <h3>{article?.title}</h3>
            <p>{article?.body}</p>
        </div>
    );
}
