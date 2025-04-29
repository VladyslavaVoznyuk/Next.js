"use client";

import { useEffect, useState } from "react";

interface Article {
    id: number;
    title: string;
    body: string;
}

const ArticleList = () => {
    const [articles, setArticles] = useState<Article[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setArticles(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Завантаження статей...</p>;
    }

    return (
        <div>
            <h1>Список статей</h1>
            <ul>
                {articles?.map((article) => (
                    <li key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;
