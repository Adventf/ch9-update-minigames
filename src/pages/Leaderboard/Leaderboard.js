import { Leaderboard } from './Database'
import "./Leaderboard.css"

export default function Board(){
  return(
    <div className="boardlele">
        <h1 className="leaderlele">LEADERBOARD</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h2>Picture</h2>
                    </div>
                    <div className="col-sm">
                        <h2>Username</h2>
                    </div>
                    <div className="col-sm">
                        <h2>Score</h2>
                    </div>
                </div>
            </div>
        <div>
            {Item(Leaderboard)}
        </div>
    </div>
    )
}
    

function Item(data){
    return (
        <>
            {
                data.map((value, key) => (
                    <div className="container" key={key}>
                        <div className="row">
                            <div className="col-sm">
                                <img className="imglele" src={value.img} alt="" />
                            </div>
                            <div className="col-sm">
                                <h4>{value.name}</h4>    
                            </div>                
                            <div className="col-sm">
                                <h4>{value.score}</h4>
                            </div>
                         </div>
                    </div>
                    )
                )
            }
        </>
    )
}
