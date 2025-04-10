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
    user1: UserData;
    user2: UserData;
    onUserClick?: (user: UserData) => void;
}