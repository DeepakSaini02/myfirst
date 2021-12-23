
function Mylist({arr}){
    return (
      <div>
        {arr.map((e)=>(
          <li>{e}</li>
        ))}
      </div>
    )
   }

   export default Mylist