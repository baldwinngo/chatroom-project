const chatList = document.querySelector('.chat-list');
const newChat = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateName = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

newChat.addEventListener('submit', e => {
  e.preventDefault();
  const message = newChat.message.value.trim();
  chatroom.addChat(message)
    .then(() => {
      newChat.reset()
    })
    .catch(err => console.log(err));
})

newNameForm.addEventListener('submit', e => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);

  newNameForm.reset();

  updateName.innerText = `Username updated to ${newName}`
  setTimeout(() => updateName.innerText = ``, 3000);
})

rooms.addEventListener('click', e => {
  if(e.target.tagName === 'BUTTON'){
    chatroomUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChat(chat => {
      chatroomUI.render(chat)
    })
  }
})

const username = localStorage.username ? localStorage.username : 'anon';

const chatroomUI = new chatUI(chatList)
const chatroom = new Chatroom('general', username);

chatroom.getChat((data) => {
  chatroomUI.render(data)
})