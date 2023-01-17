const DEBUG = true;

function VisualWrapper({
  children,
  rsc = false,
  name,
}: {
  children: React.ReactNode;
  rsc?: boolean;
  name: string;
}) {
  if (!DEBUG) {
    return <div>{children}</div>;
  }

  return (
    <div
      className={`mt-2 border-8 ${
        rsc ? "border-blue-800" : "border-red-800"
      } rounded-lg`}
    >
      <div
        className={`flex text-2xl rounded-t-sm ${
          rsc ? "bg-blue-100" : "bg-red-100"
        } font-bold`}
      >
        {rsc && <div className="bg-blue-800 text-white px-4 py-2">RSC</div>}
        <div className="ml-2 py-2 text-black">{name}</div>
      </div>
      <div className="p-1">{children}</div>
    </div>
  );
}

export default VisualWrapper;
