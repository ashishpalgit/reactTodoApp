import styles from './todo-list.module.css';

function TodoList({taskArr,deleteEntry}) {
    return (
        <>
            {taskArr.map((obj , index) => (
                <div className={styles.ashContainer} key={index}>
                <h3 className={styles.ashText}>{obj.task}</h3>
                <h3 className={styles.ashDate}>{obj.date}</h3>
                <button className={styles.ashButton } onClick = {()=> deleteEntry(index)}>Delete</button>
            </div>
            ))}
        </>
    );
}

export default TodoList;