import React,{useState} from 'react'
import data from './data.js'
import UserTable from './tables/UserTable';
import EditUserForm from './forms/EditUserForm'
import AddUserForm from './forms/AddUserForm'


const App = () => {

  const [users,setUsers]=useState(data);

  const addUser=user=>{
        user.id=users.length+1;
        setUsers([...users,user]);
  }

  const deleteUser=id=>{
        setUsers(users.filter(user=>user.id!==id));
  }

  const [editing,setEditing]=useState(false);

  const initialUser={id:null,name:'',username:''};

  const [currentUser,setCurrentUser]=useState(initialUser);

  const editUser=(id,user)=>{
        setEditing(true);
        setCurrentUser(user);
  }

  const updateUser=newUser=>{
        setUsers(
              users.map(user=>user.id===currentUser.id?newUser:user)
        );
        setCurrentUser(initialUser);
        setEditing(false);
  }

  return (
    <div className="bg-blue-200 m-4 p-4 rounded-md flex flex-col h-screen ">
            <h1 className="text-6xl text-gray-700 self-center my-8 uppercase">react crud operations</h1>
            <div className="flex flex-row">
                    <div className="w-1/2 flex justify-center">
                          {
                                editing ?(
                                    <EditUserForm setEditing={setEditing} updateUser={updateUser} currentUser={currentUser}/>
                                ):(
                                    <AddUserForm addUser={addUser}/>
                                )
                          }
                    </div>
                    <div  className="w-1/2 flex justify-center">
                          <UserTable users={users} deleteUser={deleteUser} editUser={editUser}/>
                    </div>
            </div>
      
    </div>
  )
}

export default App;