import React from "react";

const ProfileCard = ({ name,age,bio }) => {


    return (
        <div className="profile-card">
            <strong>Name:</strong>{name}<br/>
            <strong>Age:</strong> {age} <br/>
            <strong>Bio:</strong> {bio} 
                    

        </div>
    );
};
export default ProfileCard;
