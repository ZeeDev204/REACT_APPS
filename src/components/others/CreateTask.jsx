    import React, {  useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider';

    const CreateTask = () => {
        
    const [userData,setUserData] = useContext(AuthContext);

        const [taskTitle, setTaskTile] = useState('');
        const [taskDescription, setTaskDescription] = useState('');
        const [taskDate, setTaskDate] = useState('')
        const [assignTo, setAssignTo] = useState('');
        const [category, setCategory] = useState('')

        const [taskEmployees, setTaskEmployees] = useState({});

        const submitHandler = (e) => {
            e.preventDefault();
            setTaskEmployees({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,CompleteTask:false});
            const data= userData;
            data.forEach(elem => {
                if(elem.name == assignTo){
                    elem.tasks.push(taskEmployees)
                    elem.taskCount.newTask = elem.taskCount.newTask+1;
                    // console.log(elem)
                }
            });
            setUserData(data)
            // LocalStorageUpdate(data)
            console.log(data)
            
            setTaskTile('');
            setTaskDate('');
            setTaskDescription('');
            setAssignTo('');
            setCategory('');
        }
        return (
            <div>
                <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
                    <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-wrap w-full items-start justify-between'>
                        <div className='w-1/2'>
                            <div>
                                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                                <input value={taskTitle} onChange={(e) => { setTaskTile(e.target.value) }} className='text-sm py-1 px-2 w-4/5 rounded bg-transparent outline-none border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' />
                            </div>
                            <div>
                                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                                <input value={taskDate} onChange={(e) => { setTaskDate(e.target.value) }} className='text-sm py-1 px-2 w-4/5 rounded bg-transparent outline-none border-[1px] border-gray-400 mb-4' type="date" />
                            </div>
                            <div>
                                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                                <input value={assignTo} onChange={(e) => { setAssignTo(e.target.value) }} className='text-sm py-1 px-2 w-4/5 rounded bg-transparent outline-none border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' />
                            </div>
                            <div>
                                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                                <input value={category} onChange={(e) => { setCategory(e.target.value) }} className='text-sm py-1 px-2 w-4/5 rounded bg-transparent outline-none border-[1px] border-gray-400 mb-4' type="text" placeholder='Design,Dev etc' />
                            </div>
                        </div>
                        <div className='w-2/5 flex flex-col items-start'>
                            <h3 className='text-sm text-gray-300 mb-0.5'>description</h3>
                            <textarea value={taskDescription} onChange={(e) => { setTaskDescription(e.target.value) }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    export default CreateTask