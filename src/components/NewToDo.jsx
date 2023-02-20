import React, { useEffect } from "react";
import Item from "./Item";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

export default function NewTodo() {
  const [startTextList, setStartTextList] = useState([
    {
      title: "Walk Dog",
      description: "Dog walking is extremely difficult.",
      completetime: "11:30",
      id: crypto.randomUUID(),
    },
    {
      title: "Homework",
      description: "It's due tommorow.",
      completetime: "3:00",
      id: crypto.randomUUID(),
    },
  ]);

  const [textList, setTextList] = useState(() => {
    let result = localStorage.getItem("savedData");
    if (!result) return startTextList;
    return JSON.parse(result);
  });

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(textList))
  }, [textList])

  return (
    <>
    { textList && (
      <>
      {textList.map((todo) => (
        <Item
          key={todo.id}
          data={todo}
          onRemove={() =>
            setTextList(textList.filter((t) => t.id !== todo.id))
          }
          onUpdate={newData => {
            setTextList(textList.map(t => {
              if (todo.id !== t.id) return t;

              return { ...t, ...newData };
            }))
          }}
        />
      ))}
      </>
    )}
      <div className="flex">
        <button
          className="outline-5 rounded-lg bg-slate-200 outline outline-blue-500 drop-shadow-lg hover:drop-shadow-md dark:bg-stone-700"
          onClick={() =>
            setTextList([
              ...textList,
              {
                title: "Task Title",
                description: "Task Description",
                completetime: "0:00",
                id: crypto.randomUUID()
              },
            ])
          }
        >
          <IoIosAdd className="transition-none dark:fill-white" size={40} />
        </button>
      </div>
    </>
  );
}
