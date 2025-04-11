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



async function getUserInfo(): UserInfo[]{
    let stars:number=0
    let followers:number=0
    let followwing:number =0
    let reposiroryCount:number=0
    try{
        await
    }catch (err){
        console.log("ERR", err)
    }

}

