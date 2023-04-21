import React from 'react';

// interface
import { ITask } from '@/interfaces/Task';

interface Props {
  taskList: ITask[],
  handleDelete(id:number):void,
  handleEdit(task: ITask):void;
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}
            className='flex justify-between my-0 mx-auto  border-b-2 border-gray-700 border-solid p-5'
          >
            <div className='text-left'>
              <h4 className='text-lg mb-1'>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <i className="bi bi-pencil mb-2 text-lg cursor-pointer p-1 transition duration-500 rounded bg-slate-900 text-white hover:text-slate-500"
              onClick={() => handleEdit(task)}></i>
              <i className="bi bi-trash mb-2 text-lg cursor-pointer p-1 transition duration-500 rounded bg-slate-900 text-white hover:text-slate-500"
              onClick={() => {handleDelete(task.id)}}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas</p>
      )}
    </>
  )
}

export default TaskList