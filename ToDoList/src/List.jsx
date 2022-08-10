export function List(props) {
  return (
    <div
      className="col-span-4 row-span-1 rounded-lg border-1 border-white
       h-12 w-1/1 bg-indigo-800 hover:bg-indigo-900 hover:drop-shadow-lg
       justify-center items-center"
    >
      <div className="grid grid-cols-4 text-white ">
        <h1 className="text-center col-span-4 text-2xl mt-1">{props.name}</h1>
      </div>
    </div>
  );
}
