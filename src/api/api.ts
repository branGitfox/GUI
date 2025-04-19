import axios from "axios"
export interface UserInfo {
    stars:number,
    followers:number,
    following:number,
    repositoryCount: number
    avatarUrl:string,
    login:string
}

export interface RepositoryInfo{
    stars:number,
    fork:number,
    collaborators:[],
    link:string
}

const client_id = import.meta.env.VITE_CLIENT_ID
const client_secret = import.meta.env.VITE_CLIENT_SECRET


async function getUserInfo(user:string): Promise<UserInfo|undefined>{
    try{
        let starsCount:number = 0
        const res =   await axios.get(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)
        await axios.get(res?.data?.repos_url+`?client_id=${client_id}&client_secret=${client_secret}`).then((res) => {
            res.data.map((star:{stargazers_count:number}) => {
                starsCount += star?.stargazers_count
            })
        })



        return {
            stars:starsCount,
            followers:res.data.followers,
            following:res.data.following,
            repositoryCount:res.data.public_repos,
            login:res.data.login,
            avatarUrl:res.data.avatar_url
        }

    }catch (err){
        console.log("ERR", err)
    }

}


  async function getReposInfo(user:string,repos:string): Promise<RepositoryInfo|undefined>{
    try{

        const res =   await axios.get(`https://api.github.com/repos/${user}/${repos}?client_id=${client_id}&client_secret=${client_secret}`)
        const collaboratorsList = await axios.get(res.data.contributors_url+`?client_id=${client_id}&client_secret=${client_secret}`)
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