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
    <div className="mx-auto w-full max-w-xl  bg-white p-6 border-b border-slate-200">
      <div className="mb-4 flex items-center gap-3 text-sm text-slate-600">
        <Avatar name={authorname} />
        {authorname} . {publishedDate}
      </div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <p className="mt-2 text-slate-700">{content.slice(0, 100) + "...."} </p>
      </div>
      <div className="mb-4 text-sm text-slate-500">
        {`${Math.ceil(content.length / 100)} minutes`}
      </div>
    </div>
  );
};

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-neutral-tertiary rounded-full">
      <span className="font-medium text-body">{name[0]}</span>
    </div>
  );
}
