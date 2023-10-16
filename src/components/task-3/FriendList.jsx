import { FriendListItem } from "./FrListItem/FriendListItem"

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ id, avatar, isOnline, name }) => {
                return (
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        key={id} /> )
            })
            } </ul>     
    
)
}


