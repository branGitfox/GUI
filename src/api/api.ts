import axios from "axios"
export interface UserInfo {
    stars:number,
    followers:number,
    following:number,
    repositoryCount: number
}

export interface RepositoryInfo{
    stars:number,
    fork:number,
    collaborators:[],
    link:string
}




async function getUserInfo(user:string): Promise<UserInfo|undefined>{
    try{

        const res =   await axios.get(`https://api.github.com/users/${user}`)
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


  async function getReposInfo(user:string,repos:string): Promise<RepositoryInfo|undefined>{
    try{

        const res =   await axios.get(`https://api.github.com/repos/${user}/${repos}`)
        const collaboratorsList = await axios.get(res.data.contributors_url)
       return {
           stars:res.data.stargazers_count,
           fork:res.data.forks_count,
           collaborators:collaboratorsList.data,
           link:res.data.link
       }

    }catch (err){
        console.log("ERR", err)
    }

}


export {
    getUserInfo,
    getReposInfo,
}