class Player {
  constructor(){
    this.score = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      score:this.score
    });
  }
  getState(){
      var state = database.ref('GameState');
      state.on("value",(data)=>{
        gameState = data.val();
      })
  }
  updateState(state){
      database.ref('/').update({
          GameState: state
      });
  }

//  static getPlayerInfo(){
    //var playerInfoRef = database.ref('players');
    //playerInfoRef.on("value",(data)=>{
     // allPlayers = data.val();
//   })
 // }
  //getRank(){
    //var ranking = database.ref('carsAtEnd');
    //ranking.on("value",(data)=>{
      //this.rank = data.val();
    //})
  //}

  //static updateRank(x){
    //database.ref('/').update({
     // carsAtEnd: x 
    //});
 // }

}
