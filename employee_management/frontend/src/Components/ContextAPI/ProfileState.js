import ProfileContext from "./profileContext";
import { useState } from "react";

const ProfileState = (props) => {
    const host = "http://localhost:5000"
    const initailProfiles = []
    const [profiles, setProfiles] = useState(initailProfiles)

    const getProfiles = async () => {
        const response = await fetch(`${host}/api/profile/fetchEmployees`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1NTA4ZjJkOWMyMGVkZTM3M2ZkZTUzIn0sImlhdCI6MTY2NjUxNzMxMH0.osTJsGKeuA9kHr96pWX5AiceG88ccfWJ7o0ofj-u9es"
            }
        });
        const json = await response.json();
        console.log(json);
        setProfiles(json)
    }

    const addProfile = async (employee_name, age, salary, position = "SDE-1") => {
        const response = await fetch(`${host}/api/profile/addEmployee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1NTA4ZjJkOWMyMGVkZTM3M2ZkZTUzIn0sImlhdCI6MTY2NjUxNzMxMH0.osTJsGKeuA9kHr96pWX5AiceG88ccfWJ7o0ofj-u9es"
            },
            body: JSON.stringify({ employee_name, age, salary, position })
        });
        console.log("Adding a new employee", response)
    }

    const deleteProfile = async(id)=>{
        const response = await fetch(`${host}/api/profile/deleteEmployee/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1NTA4ZjJkOWMyMGVkZTM3M2ZkZTUzIn0sImlhdCI6MTY2NjUxNzMxMH0.osTJsGKeuA9kHr96pWX5AiceG88ccfWJ7o0ofj-u9es"
            },
        });
       console.log("Deleting the employee with the id "+id);
       const newsetofProfiles=initailProfiles.filter((profile)=>{return profile._id!==id});
       setProfiles(newsetofProfiles)
       console.log(response)
    }

    const updateProfile=async(id,position,age,salary)=>{
        const response = await fetch(`${host}/api/profile/updateEmployee/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1NTA4ZjJkOWMyMGVkZTM3M2ZkZTUzIn0sImlhdCI6MTY2NjUxNzMxMH0.osTJsGKeuA9kHr96pWX5AiceG88ccfWJ7o0ofj-u9es"
            },
            body: JSON.stringify({position,age,salary})
        });
        console.log(response)
        // const json=response.json()
        for (let index = 0; index < initailProfiles.length; index++) { 
            const element = initailProfiles[index]; 
            if (element._id === id) { 
                element.position= position; 
                element.age = age; 
                element.salary = salary;
            }
        }
    }

    return <ProfileContext.Provider value={{ profiles, getProfiles, addProfile, updateProfile, deleteProfile}}>
        {props.children}
    </ProfileContext.Provider>
}

export default ProfileState