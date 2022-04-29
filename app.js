const chatList = document.querySelector('.chat-list');
const newChat = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateName = document.querySelector('.update-mssg');

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



const chatroomUI = new chatUI(chatList)
const chatroom = new Chatroom('anime', 'aiden');

chatroom.getChat((data) => {
  chatroomUI.render(data)
})