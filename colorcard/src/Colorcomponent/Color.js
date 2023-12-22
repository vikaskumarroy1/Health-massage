const Colorcard=(props)=>{
    return(

        <div style={{border:"1px solid black",width:"10%",margin:"10px"}}>
            <div
            style={{height:"150px",backgroundColor:props.colorcode}}>
                

            </div>
            
            <h2>{props.colorcode}</h2>
            <span style={{color:props.colorcode}}>{props.colorName}</span>
        </div>
    )

}
export default Colorcard