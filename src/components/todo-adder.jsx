import styles from './todo-adder.module.css';

function TodoAdder({handleButton,val,setVal}){
    return (
        <>
            <div className={styles.ashContainer}>
                <input type="text" placeholder='Enter Todo hear' className={styles.ashText} 
                onChange={(e) => setVal({...val,task: e.target.value})}/>

                <input type="date" className={styles.ashDate}  onChange={(e) => setVal({...val,date:e.target.value})}/>
                
                <button className={styles.ashButton} onClick={handleButton}>Add</button>
            </div>
        </>
    )
}

export default TodoAdder;