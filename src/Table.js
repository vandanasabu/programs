import React from "react";
import { useState,useEffect } from "react";

const Table =() =>{
    const [users,setUsers]=useState([]);
    useEffect( () =>{
        function getUsers(){
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((res) =>{
                setUsers(res);
            })
            .catch ((error) => alert ("error "+ error));
        }
        getUsers();
    },[]);
    return(
        <div>
            
                
                    
                {users.map((user) =>(
                    <ul key={user.id}>
                        <li>{user.name}</li>
                        <li>{user.phone}</li>
                        <li>{user.email}</li>
                    </ul>
                ))}

            
        </div>
    )
}
export default Table;