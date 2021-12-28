export const GroceryList = ({title,id,status,deleteData})=>{
 const deleteItem =(e)=>{
   console.log("inside list",id)
  deleteData(id)
 }
  return <>
  <div>
    {`${title}       ${status}        `}
    <button onClick={deleteItem}>Delete</button>
  </div>

  
  
  </>

}