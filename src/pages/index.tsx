import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import { useState } from 'react';
import Head from 'next/head';

// Interface
import { ITask } from '@/interfaces/Task';
import Modal from '@/components/Modal';

export default function Home() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
      return task.id !== id
      })
    );
  };

  const hideOrShowModal = (display:boolean) => {
    const modal = document.querySelector("#modal")
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide")
    }
  };

  const editTask = (task:ITask):void =>{
    hideOrShowModal(true);
    setTaskToUpdate(task)
  }

  const updateTask = (id:number, title:string, difficulty:number) => {
    const updatedTask: ITask = {id, title, difficulty};
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })
    setTaskList(updatedItems);
    hideOrShowModal(false);
  }

  return (
    <>
    <Modal>
      {<TaskForm 
      btnText="Editar Tarefa" 
      taskList={taskList}         
      task={taskToUpdate}
      handleUpdate={updateTask}
      />}
    </Modal>
    <main className='bg-slate-200 flex flex-col gap-5 justify-center items-center'>
      <Head>
      <title>toDo</title>
      <meta name="keywords" content="toDo List" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link>
      </Head>
      <div className='p-8 border-2 border-slate-300 rounded-md mt-5' >
        <h2 className='text-center mb-2 text-lg font-bold'>O que você vai fazer?</h2>
        <TaskForm  
        btnText="Criar Tarefa" 
        taskList={taskList} 
        setTaskList={setTaskList}/>
      </div>
      <div className='p-8 w-3/5'>
        <h2 className='text-center text-2xl font-bold'>Suas tarefas:</h2>
        <TaskList 
          taskList={taskList}
          handleDelete={deleteTask}
          handleEdit={editTask}
        />
      </div>
    </main>
    </>
  )
}
