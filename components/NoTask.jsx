import Image from "next/image";

const NoTask = () => {
  return (
    <div className="flex flex-col items-center mb-20 justify-center">
      <Image src="/empty_todos.svg" width="450px" alt="empty" height="450px" />
      <h1 className="mt-0 p-0 text-4xl font-black"> You don&apos;t have task</h1>
      <p className="text-gray-400 mt-2">
        Here you will be able to see the tasks you create and the ones assigned
        to you
      </p>
    </div>
  );
}

export default NoTask;