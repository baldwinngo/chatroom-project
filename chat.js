class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = db.collection('chat');
  }
  async addChat(message){
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    }
    const response = await this.chats.add(chat);
    return response;
  }
  getChat(callback){
    this.chats.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type === 'added'){
          //update the ui
          callback(change.doc.data())
        }
      })
    })
  }
}

const chatroom = new Chatroom('general', 'abls');

chatroom.getChat((data) => {
  console.log(data)
})