import { Children } from 'react'
import styles from '../styles/Home.module.scss'

export default function NavBar(props){
    return (
    <div className={styles.navbar}>
        {props.children}
    </div>
    )
}