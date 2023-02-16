import React, {useState} from 'react';

import INITIAL_HISTORY from '../data/chat_log.json'

export function ChatPane(props) {
  const [clickCount, setClickCount] = useState(340)

  const handleClick = function(event) {
    console.log("You clicked me!");
    setClickCount(clickCount + 1) //put that into state (in RAM, the corner)
    //AND it re-renders the component
  }

  //data!! -- an array of messages [{}]
  const messageObjArray = INITIAL_HISTORY
    .sort((m1, m2) => m2.timestamp - m1.timestamp); //reverse chron order

  //content!! [<MessageItem>]
  const messageElemArray = messageObjArray.map((messageObj) => {
    const messageElem = <MessageItem
      messageData={messageObj}
      userName={messageObj.userName} 
      userImg={messageObj.userImg} 
      text={messageObj.text}
      key={messageObj.timestamp} />
    
      return messageElem; //put it in the new array!
  });


  return (
    <div className="scrollable-pane">
      <div className="pt-2 my-2">
        <button onClick={handleClick} className="btn btn-success">Click me!</button>
        <p>You clicked me {clickCount} times</p>
      </div>
      <hr/>

      {/* Messages */}
      {messageElemArray}
      {/* <ComposeForm /> */}
    </div>
  )
}

function MessageItem(props) {
  const userName = props.userName;
  const userImg = props.userImg;
  const text = props.text;

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = function(event) {
    setIsLiked(!isLiked);
  }

  let buttonColor = "grey";
  if(isLiked) {
    buttonColor = "red"; //filled in
  }

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}
