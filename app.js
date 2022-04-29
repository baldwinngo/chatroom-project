const chatList = document.querySelector('.chat-list');

const chatroomUI = new chatUI(chatList)
const chatroom = new Chatroom('anime', 'aiden');

chatroom.getChat((data) => {
  chatroomUI.render(data)
})


