export const Appbar = () => {
  return (
    <div className="border-b sticky top-0 z-50 bg-white flex items-center justify-between px-5 py-3">
      <div>Medium</div>
      <div className=" flex  justify-center gap-3 ">
        <div className="bg-slate-400 w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
          ...
        </div>
        <Avatar name="lund" />
      </div>
    </div>
  );
};

function Avatar({ name }: { name: string }) {
  return (
    <div className="sticky top-0 z-50 bg-slate-200 inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-neutral-tertiary rounded-full">
      <span className="font-medium text-body">{name[0]}</span>
    </div>
  );
}
