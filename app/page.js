
import Link from "next/link";
import İmage from "next/image";

export default async function Home() {

  const { users } = await fetch(" https://dummyjson.com/users").then(res => res.json());
  console.log(users)

  return (
   <>
    <div className="container">
      {users.map(x => 
      <div key={x.id} className="user-item">
         <İmage src={x.image} width={200} height={200} alt={x.firstName} priority={true}/>
         <span>İsim: {x.firstName} </span> 
         <span>Soyisim: {x.lastName}</span>
         <h3>Yaş: {x.age}</h3>
         <Link href={"/details/" + x.id}>Detay Göster</Link>
      </div> 
      )}
    
   </div>

   
   </>
    
  )
}
