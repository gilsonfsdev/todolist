import React, { useState, ChangeEvent, FormEvent, useEffect} from 'react'

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?:ITask | null;
  handleUpdate?(id:number, title:string, difficulty:number):void;
}

import { ITask } from '@/interfaces/Task'

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}:Props) => {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect (() => {
    if(task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty)
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    if(handleUpdate){
       handleUpdate(id, title, difficulty)
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = {id, title, difficulty};

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value)
    } else {
      setDifficulty(parseInt(e.target.value))
    }
  }

  return (
    <form onSubmit={addTaskHandler} className='flex flex-col gap-2'>
      <div>
        <label htmlFor='title'>Tarefa: </label>
        <input className="px-5 py-1 mb-1 w-full" 
          type="text" 
          name="title" 
          placeholder="Nome da tarefa" 
          onChange={handleChange} 
          value={title}
        />
      </div>
      <div>
        <label htmlFor='difficulty'>Dificuldade: </label>
        <input className="px-5 py-1 mb-1 w-full" 
          type="text" 
          name="difficulty" 
          placeholder="Dificuldade da tarefa"
          onChange={handleChange} 
          value={difficulty}
        />
      </div>
      <input className='bg-slate-700 p-2 cursor-pointer' type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm