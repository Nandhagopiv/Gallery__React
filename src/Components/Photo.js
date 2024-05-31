function Photo(props){
    return(
        <div className='imgbox'>
          <img className='img' src={props.pic}></img>
          <h2>{props.rec}</h2>
        </div>
    )
}

export default Photo