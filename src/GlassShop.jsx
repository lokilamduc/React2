import React,  {useState} from 'react'
import style from "./style.module.css"
function GlassShop() {
      const [glassUrl, setGlassUrl] = useState("./img/v1.png")
    return (
        <div className={style.background}>
            <div style={{ backgroundColor: 'rgba(0,0,0,.7)', minHeight: '2000px' }}>
            <div>
                <h3 className='text-center text-light p-4' style={{ backgroundColor: 'rgba(0,0,0,.3)' }}>TRY GLASSES APP ONLINE</h3>
                <div className='row mt-5'>
                    <div className='col position-relative text-center'>
                        <img style={{ width: '200px' }} src='./img/model.jpg' alt='model'></img>
                        <img className={`position-absolute ${style.glassesStyle}`} src={glassUrl} alt='glass' ></img>
                        <div className="container mt-5">
                            <div className="row d-flex align-content-center flex-wrap bg-white">
                                <div className="col-sm" onClick={()=> setGlassUrl("./img/v1.png")}>
                                <img src="./img/g1.jpg" alt="" width="80px" />
                                </div>
                                <div className="col-sm" onClick={()=> setGlassUrl("./img/v2.png")}>
                                    <img src="./img/g2.jpg" alt="" width="80px" />
                                </div>
                                <div className="col-sm mt-4" onClick={()=> setGlassUrl("./img/v3.png")}>
                                    <img src="./img/g3.jpg" alt="" width="80px" />
                                </div>
                                <div className="col-sm mt-4" onClick={()=> setGlassUrl("./img/v4.png")}>
                                    <img src="./img/g4.jpg" alt="" width="80px" />
                                </div>
                                <div className="col-sm mt-3" onClick={()=> setGlassUrl("./img/v5.png")}>
                                    <img src="./img/g5.jpg" alt="" width="80px" />
                                </div>
                                <div className="col-sm mt-4" onClick={()=> setGlassUrl("./img/v6.png")}>
                                    <img src="./img/g6.jpg" alt="" width="80px" />
                                </div>
                                <div className="col-sm mt-1" onClick={()=> setGlassUrl("./img/v7.png")}>
                                    <img src="./img/g7.jpg" alt="" width="80px" />
                                </div>
                                <div className="col-sm mt-4" onClick={()=> setGlassUrl("./img/v8.png")}>
                                    <img src="./img/g8.jpg" alt="" width="80px" />
                                </div>
                                <div className="col-sm mt-4" onClick={()=> setGlassUrl("./img/v9.png")}>
                                    <img src="./img/g9.jpg" alt="" width="80px" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}


export default GlassShop