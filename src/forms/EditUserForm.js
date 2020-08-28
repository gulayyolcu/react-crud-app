import React,{useState,useEffect} from 'react'

const EditUserForm = (props) => {

    useEffect(()=>{setUser(props.currentUser)},[props])

    const [user,setUser]=useState(props.currentUser);

    const handleChange=e=>{
            const {name,value}=e.target;
            setUser({...user,[name]:value});
    }

    const handleSubmit=e=>{
            e.preventDefault();
            if(user.name && user.username){
                    props.updateUser(user);
            }
    }

    return (
        <div>
            <h2 className="text-4xl text-gray-700 font-bold ml-0" >Edit User</h2>
            <form>
                    <label className="text-gray-700 font-bold" htmlFor="name">Name</label>
                    <input onChange={handleChange} className="p-2 rounded-md mx-2" type="text" value={user.name} name="name"/>
                    <label className="text-gray-700 font-bold" htmlFor="username">User Name</label>
                    <input onChange={handleChange} className="p-2 rounded-md mx-2" type="text" value={user.username} name="username"/>
                    <button onClick={handleSubmit} className="p-2 mr-4 bg-blue-400 text-white font-bold rounded-md">Edit User</button>
                    <button onClick={()=>props.setEditing(false)} className="p-2 bg-blue-400 text-white font-bold rounded-md">Cancel</button>
            </form>
        </div>
    )
}

export default EditUserForm;
