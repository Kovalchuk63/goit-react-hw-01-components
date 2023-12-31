import styles from './FriendListItem.module.css'

export const FriendListItem = ({ isOnline, avatar, name, }) => {
    return ( 
        <li className={styles.item}>
            <span className={styles.status}
                style={{ backgroundColor: isOnline ? 'green' : 'red' }}> {isOnline}</span>
          <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={styles.name}>{name}</p>
       </li>
    )
}
