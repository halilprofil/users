import İmage from "next/image";

export default async function UserDetails({ params }) {
    const { id } = params; 
  
    // Kullanıcı verilerini al
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await response.json();
  
    // Todos verilerini al
    const fetchData = await fetch(`https://dummyjson.com/users/${id}/todos`);
    const { todos } = await fetchData.json();
  
    return (
      <>
        <div className="user-profile">
          {/* Profil Resmi */}
          
          <İmage src={data.image} width={200} height={200} alt={data.firstName} priority={true}/>

          {/* Kullanıcı Bilgileri */}
          <h1>{data.firstName} {data.lastName}</h1>
          <p><strong>Username:</strong> {data.username}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Gender:</strong> {data.gender}</p>
          <p><strong>Age:</strong> {data.age}</p>
          <p><strong>Address:</strong> {data.address.address}, {data.address.city}, {data.address.state}, {data.address.postalCode}</p>
  
          {/* TODO Listesi */}
          <h2>To-do List:</h2>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.todo}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }