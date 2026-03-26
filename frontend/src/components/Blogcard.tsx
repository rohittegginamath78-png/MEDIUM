import { Link } from "react-router-dom";

interface BlogcardProps {
  id:string;
  title: string;
  authorname: string;
  content: string;
  publishedDate: string;
}

export const Blogcard = ({
  id,
  title,
  authorname,
  content,
  publishedDate,
}: BlogcardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="mx-auto w-full max-w-xl border border-border bg-surface p-6 rounded-xl">
      <div className="mb-4 flex items-center gap-3 text-sm text-muted">
        <Avatar name={authorname} />
        {authorname} . {publishedDate}
      </div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-text">{title}</h1>
        <p className="mt-2 text-muted">{content.slice(0, 100) + "...."} </p>
      </div>
      <div className="mb-4 text-sm text-muted">
        {`${Math.ceil(content.length / 100)} minutes`}
      </div>
    </div>
    </Link>
  );
};

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-background">
      <span className="font-medium text-text">{name[0]}</span>
    </div>
  );
}
