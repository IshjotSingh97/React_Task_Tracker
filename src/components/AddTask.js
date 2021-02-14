import { useState } from 'react'

const AddTask = ({ addTask }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text || !day) {
            alert('Please add a task completely')
            return
        }




        const task = {
            'text': text,
            'day': day,
            'reminder': reminder
        }

        addTask(task)

        alert('Task added successfully')

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Add a task</label>
            <input
                type='text'
                placeholder='Enter the description'
                value={text}
                onChange={(e) => (setText(e.target.value))}
            />
            <input
                type='text'
                placeholder='Enter the day'
                value={day}
                onChange={(e) => setDay(e.target.value)}
            />
            <input
                type='checkbox'
                checked={reminder}
                value={reminder}
                onChange={(e) => (setReminder(e.currentTarget.checked))}
            />
            <input type='submit' value='Add a task' />
        </form>
    )

}

export default AddTask