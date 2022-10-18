import React, { useState } from 'react';

const Todo = () => {
  const [task, setTask] = useState<string>('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTask(e.currentTarget.value);
  };

  const addTask = () => {
    setTodoList([...todoList, task]);
    setTask('');
  };

  const handleClear = () => {
    setTodoList([]);
  };

  const handleRemove = (index: number) => {
    const newState = [...todoList];
    newState.splice(index, 1);
    setTodoList(newState);
  };
  return (
    <form className='bg-black' onSubmit={(e) => handleSubmit(e)}>
      <div className='h-screen flex flex-col items-center'>
        <label className='text-white  text-2xl'>Todo-list</label>
        <input
          type='text'
          name='todo'
          id='todo'
          value={task || ''}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Todo-list'
          className='border border-gray-200 p-2 rounder-lg appearance-none focus:outline-none focus:border-gray-500'
        />
        <div className='flex justify-between'>
          <button
            onClick={() => addTask()}
            type='submit'
            className=' mt-2 bg-white-500 hover:bg-green-500 text-white font-bold py-2 px-4 border rounded uppercase'
          >
            Submit
          </button>
          <button
            className='mt-2 bg-white-500 hover:bg-red-500 text-white font-bold py-2 px-4 border rounded ml-3 uppercase'
            onClick={handleClear}
          >
            clear all
          </button>
        </div>
        <ul>
          {todoList.map((todo, index) => {
            return (
              <li
                key={index}
                className='text-white justify-center mt-10 list-decimal text-3xl'
              >
                {todo}
                <button
                  className='text-red-500 ml-10'
                  onClick={() => handleRemove(index)}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </form>
  );
};

export default Todo;
