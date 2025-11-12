type profilePicProps = {
    setClassName: string,
    setSRC: string
}

export default function ProfilePictureComponent({setClassName, setSRC}: profilePicProps){
    return(
        <div>
            <picture>
                <img src={setSRC} className={setClassName} alt="profile-pic"/>
            </picture>
        </div>
    );
}