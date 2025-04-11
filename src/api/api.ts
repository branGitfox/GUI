import axios from "axios"
interface UserInfo {
    stars:number,
    followers:number,
    following:number,
    repositoryCount: number
}

interface RepositoryInfo{
    stars:number,
    fork:number,
    collaborators:UserInfo[],
    link?:string
}




export default async function getUserInfo(): Promise<UserInfo|undefined>{
    try{

        const res =   await axios.get("https://api.github.com/users/BranGitfox")
        return {
            stars:10,
            followers:res.data.followers,
            following:res.data.following,
            repositoryCount:res.data.public_repos
        }

    }catch (err){
        console.log("ERR", err)
    }

}


export  async function getReposInfo(user:string,repos:string): Promise<RepositoryInfo|undefined>{
    try{

        const res =   await axios.get(`https://api.github.com/users/${user}/${repos}`)
       return res.data

    }catch (err){
        console.log("ERR", err)
    }

}
