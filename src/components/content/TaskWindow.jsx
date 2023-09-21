import './taskWindow.css';
import { Link } from "react-router-dom"
import { useState } from 'react';
import { ButtonUpdate } from './Button/ButtonUpdate';

function TaskWindow({ data, handleClickUpdate }) {

    const [isValide, setIsValide] = useState(false)

    const [description, setDescription] = useState(() => {
        if (data.description !== '') {
            return data.description
        } else {
            return "This task has no description"
        }
    })

    function handleClickUpdates (e) {
        handleClickUpdate(e)
        setIsValide(false)
    }
    

    function handleChangeInput(e) {
        if (e.target.value !== description) {
            setDescription(e.target.value)
            setIsValide(true)
        }
    }


	return(
		<div className='task-window'>
            <div className='info-task'>
                <h2>{data.name}</h2>
                <input type="text" value={description} onChange={(e) => handleChangeInput(e)}/>
                <br/>
                {isValide === true && (<ButtonUpdate description = {description} dataId = {data.id}  handleClickUpdates={handleClickUpdates}/>)}
            </div>
            <div className='link'>
                <Link to="/">Х</Link>
            </div>
            
		</div>
	)
}


export default TaskWindow