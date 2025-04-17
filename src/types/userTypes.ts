import {UserInfo} from "../api/api.ts";

export interface UserData {
    username: string;
    stars: number;
    followers: number;
    following: number;
    repos: number;
    collaborations: number;
    avatarUrl: string;
}

export interface UserComparisonProps {
    user1: string;
    user2: string;
    onUserClick?: (user: UserInfo|undefined) => void;
    onUseClick?:() => void

}