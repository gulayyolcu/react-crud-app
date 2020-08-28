import React,{useState} from 'react'

const AddUserForm = (props) => {

    const initUser={id:null,name:'',username:''};

    const [user,setUser]=useState(initUser);

    const handleChange=e=>{
            const {name,value}=e.target;
            setUser({...user,[name]:value});
    }

    const handleSubmit=e=>{
            e.preventDefault();
            if(user.name && user.username){
                    handleChange(e,props.addUser(user));
            }
    }

    return (
        <div>
            <h2 className="text-4xl text-gray-700 font-bold ml-0" >Add User</h2>
        
            <form>
                    <label className="text-gray-700 font-bold" htmlFor="name">Name</label>
                    <input onChange={handleChange} className="p-2 rounded-md mx-2" type="text" value={user.name} name="name"/>
                    <label className="text-gray-700 font-bold" htmlFor="username">User Name</label>
                    <input onChange={handleChange} className="p-2 rounded-md mx-2" type="text" value={user.username} name="username"/>
                    <button onClick={handleSubmit} className="p-2 ml-4 bg-blue-400 text-white font-bold rounded-md">Add User</button>
            </form>
        </div>
    )
}

export default AddUserForm;
