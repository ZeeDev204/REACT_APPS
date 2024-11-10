import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
    console.log(data);
    
    return (
        <div id='taskList' className='h-[55%] overflow-auto flex items-center justify-start gap-5 py-5 w-full mt-10'>
            {data.tasks.map((elem,idx)=>{
                if(elem.active){
                   return <AcceptTask key={idx} datas={elem}/>
                }
                if(elem.newTask){
                    return <NewTask key={idx} datas={elem}/>
                }
                if(elem.completed){
                    return <CompleteTask key={idx} datas={elem}/>
                }
                if(elem.failed){
                    return <FailedTask key={idx} datas={elem}/>
                }
            })
}
        </div>
        
    )
}

export default TaskList