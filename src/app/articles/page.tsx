/*
import ArticleList from "@/components/ArticleList";

const ArticlesPage = () => {
    return (
        <div>
            <h1>Сторінка статей</h1>
            <ArticleList />
        </div>
    );
};

export default ArticlesPage;

*/

"use client";
import { useEffect, useState } from "react";

type Article = {
    id: number;
    title: string;
};

export default function Articles() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setArticles(data.slice(0, 10));
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Articles Page</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </div>
    );
}
