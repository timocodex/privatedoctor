var def= 'https:\/\/fifa17.content.easports.com\/fifa\/fltOnlineAssets\/CC8267B6-0817-4842-BB6A-A20F88B05418\/2017\/fut\/items\/images\/players\/html5\/120x120\/158023.png'


export default (state = def , action) => {
  switch(action.type){
    case 'SELECT_IMAGE' :
      return action.payload
    default:
      return state
  }
}
