import Division from "@/models/Division";
function StudentDetailsByDivision({articles}) { 

    return (
        <>
        <h1>
            {articles.map(item=>(
<li key={item._id}> division name {item.division} </li>
            ))}
        </h1>
        </>
    )
 }
 export default StudentDetailsByDivision


 export async function getServerSideProps(context){
    const {params} = context
    const {division} = params
    
    console.log(division);
    const response = await fetch(`http://localhost:3000/api/division`)

    const data = await response.json()
    return {
        props:{
            articles:data,
            
        }
    }
 }