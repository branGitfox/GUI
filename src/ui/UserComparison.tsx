import React, { useState } from 'react';
import { UserComparisonProps } from '../types/userTypes.ts';
import {getUserInfo, UserInfo} from "../api/api.ts";
import {useEffect} from "react";
const UserComparison: React.FC<UserComparisonProps> = ({ user1, user2, onUserClick }) => {
  const [position, setPosition] = useState(50);
    const [userOne, setUser1]= useState<UserInfo|undefined>()

    const [userTwo, setUser2]= useState<UserInfo|undefined>()

    useEffect(() => {
        getUserInfo(user1).then((info:UserInfo|undefined) => setUser1(info))
        getUserInfo(user2).then((info:UserInfo|undefined) => setUser2(info))
    }, [user1, user2])

  return (
    <div className="w-full relative h-64 rounded-lg overflow-hidden">
      <div
        className="absolute top-0 left-0 bottom-0 cursor-pointer"
        style={{ 
          width: `${position}%`,
          zIndex: 2
        }}
        onClick={() => onUserClick?.(userOne)}
      >
        <img
          src={userOne?.avatarUrl}
          alt={userOne?.login}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
          {userOne?.login}
        </div>
      </div>
      <div
        className="absolute top-0 right-0 bottom-0 cursor-pointer"
        style={{ 
          width: `${100 - position}%`,
          zIndex: 2
        }}
        onClick={() => onUserClick?.(userTwo)}
      >
        <img
          src={userTwo?.avatarUrl}
          alt={userTwo?.login}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
          {userTwo?.login}
        </div>
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        onMouseDown={(e) => {
          e.preventDefault();
          const startX = e.clientX;
          const startPos = position;

          const handleMouseMove = (moveEvent: MouseEvent) => {
            const container = e.currentTarget.parentElement?.getBoundingClientRect();
            if (!container) return;
            
            const newPosition = startPos + ((moveEvent.clientX - startX) / container.width) * 100;
            setPosition(Math.min(Math.max(newPosition, 10), 90));
          };

          const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
          };

          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        }}
      />
    </div>
  );
};

export default UserComparison;