

const Entry = (props) => {
    return (
     <div>
                <p>{props.key}</p>

                <p>{props.emoji}</p>
        <p>{props.name}</p>
                <p>{props.meaning}</p>

     </div>
    );
  
}

export default Entry
