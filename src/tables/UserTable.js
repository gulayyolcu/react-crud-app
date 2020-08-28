import React from 'react'

const UserTable = (props) => {
    return (
        <div>
                <h2 className="text-4xl text-gray-700 font-bold px-4" >View User</h2>
                <table className="table-fixed">
                    
                                <tr className="text-gray-700">
                                        <td className="py-2 px-4 w-48 font-bold text-xl">Name</td>
                                        <td className="py-2 px-4 w-48 font-bold text-xl">User Name</td>
                                        <td className="py-2 px-4 w-48 font-bold text-xl">Actions</td>
                                </tr>
                                {
                                        props.users.length>0 ?(
                                            props.users.map(user=>{
                                                const {id,name,username}=user;
                                                return(
                                                    <tr className="text-gray-700" key={id}>
                                                            <td className="py-2 px-4 w-32">{name}</td>
                                                            <td className="py-2 px-4 w-32">{username}</td>
                                                            <td className="py-2 px-4 w-48">
                                                                    <button onClick={()=>props.editUser(id,user)} className="p-2 mr-4 bg-blue-400 text-white font-bold rounded-md" >Edit</button>
                                                                    <button onClick={()=>props.deleteUser(id)} className="p-2 mr-4 bg-blue-400 text-white font-bold rounded-md">Delete</button>
                                                            </td>
                                                    </tr>
                                                )
                                                
                                            })
                                        ):(
                                            <tr colspan={4}>No users found</tr>
                                        )
                                }
                                                 
                </table>
        </div>
    )
}

export  default UserTable;