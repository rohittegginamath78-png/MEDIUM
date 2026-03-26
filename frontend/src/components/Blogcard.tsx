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
  const excerpt =
    content.length > 150 ? `${content.slice(0, 150).trimEnd()}...` : content;

  return (
    <Link to={`/blog/${id}`} className="group mx-auto block w-full max-w-2xl">
    <article className="rounded-2xl border border-border bg-surface/85 p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_10px_30px_-16px_rgba(0,0,0,0.35)]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-sm text-muted">
          <Avatar name={authorname} />
          <div className="flex flex-col leading-tight">
            <span className="font-medium text-text">{authorname}</span>
            <span className="text-xs text-muted">{publishedDate}</span>
          </div>
        </div>
        <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs text-muted">
          {`${Math.ceil(content.length / 100)} min read`}
        </span>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-text transition-colors group-hover:text-primary">
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-muted">{excerpt}</p>
      </div>

      <div className="mt-5 flex items-center text-sm font-medium text-muted transition-colors group-hover:text-text">
        Read article
        <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
          {"->"}
        </span>
      </div>
    </article>
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
