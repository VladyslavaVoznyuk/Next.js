// pages/articles/[id]/page.tsx
import { Metadata } from "next";

type ArticleProps = {
    params: { id: string };
};

export async function generateStaticParams() {
    return Array.from({ length: 10 }, (_, i) => ({ id: (i + 1).toString() }));
}

export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
    return { title: `Article ${params.id}` };
}

export default async function ArticlePage({ params }: ArticleProps) {
    const { id } = params;

    const articleRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
        res.json()
    );

    return (
        <div>
            <h1>{articleRes.title}</h1>
            <p>{articleRes.body}</p>
        </div>
    );
}
