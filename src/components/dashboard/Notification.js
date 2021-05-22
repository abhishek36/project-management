  
import React from 'react'
import moment from 'moment'

const Notifications = () => {
  const notifications = [
      {'id':'1'  , 'user':'Abhi Kamble' , 'content':'Added Project' , 'time':'2021-05-22T08:53:57.463Z'} ,
      {'id':'1'  , 'user':'Kamlesh Bahekar' , 'content':'Joined Party' , 'time':'2021-05-22T09:53:57.463Z'} ,
      {'id':'1'  , 'user':'Abhi Kamble' , 'content':'Added Project' , 'time':'2021-05-22T10:53:57.463Z'} 
    ]
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="online-users">
            { notifications && notifications.map(item =>{
              return <li key={item.id}>
                <span className="pink-text">{item.user} </span>
                <span>{item.content}</span>
                <div className="note-date grey-text">{moment(item.time).fromNow()}</div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications