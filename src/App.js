function App(){
    const drumbeats = [
      {
        id: "Q",
        clip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      },
      
        {
          id: "W",
          clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        },
        {
          id: "E",
          clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        },
        {
          id: "A",
          clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        },
        {
          id: "S",
          clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        },
        {
           
            id: "D",
          clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        },
        { 
          id: "Z",
          clip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        },
        {
          id: "X",
          clip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        },
        {
          id: "C",
          clip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        },
        
      ];
      const [pressedKey,setPressedKey] = React.useState("");
      React.useEffect(()=>{
        document.addEventListener("keydown",(event)=>{
          const pressedKey = event.key.toUpperCase();
          playBeat(pressedKey);
          
        })
      },[])
      
      function playBeat(id){
        const element = document.getElementById(id);
        element.play();
        setPressedKey(id);
      }
    return(
        <div className="container-fluid">
          <h3 id="title">Drum Machine</h3>
          <div id="drum-machine">
            <div id="display">{pressedKey}</div>

                {drumbeats.map((drum)=>(
                            <button key={drum.id} className="drum-pad btn btn-primary" id ={drum.clip} onClick={()=>playBeat(drum.id)} >
                                {drum.id}
                                <audio src={drum.clip} className="clip" id={drum.id}></audio>
                            </button>
                            
                        ))}
                    
            </div>
            <span id="author">Designed and Coded by<br></br> <b>Mmaboko Tiisetso</b></span>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App/>)