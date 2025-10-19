import ProfileCard from './ProfileCard';


const ProfileContainer = () => {
    
    const profiles = [
        {
            name: "Allen",
            age: 30 ,
            bio:"A software engineer who loves hiking."
        },
        {
            name: "Ben",
            age: 35 ,
            bio:"A designer passionate about photography."
        },
        {
            name: "Carrie",
            age: 45 ,
            bio:"An Instructor passionate about teaching."
        }
        
    ]

    return (
        <div className="profile-container">
            <h2>User Profiles</h2>
        <div className="card-grid">
            {profiles.map((profile ,index) =>(
            <ProfileCard 
            key={index}
            name={profile.name}
            age={profile.age}
            bio={profile.bio} />
            ))}


        </div>
        </div>
    )
}

export default ProfileContainer;