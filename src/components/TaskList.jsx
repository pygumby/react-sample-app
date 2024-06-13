// Custom
import TaskItem from './TaskItem'

// Styles
import styles from './TaskList.module.css'

const TaskList = ({tasks}) => {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a, b) => b.id - a.id).map(task => (
        <TaskItem
          id={task.id}
          task={task}
        />
      ))}
    </ul>
  )
}

export default TaskList
