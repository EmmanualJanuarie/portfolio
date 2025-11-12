
type iconComponentProps = {
    setClassName: string,
    setSRC: string,
    setURL: string

}

export default function IconComponent({setClassName, setSRC, setURL}: iconComponentProps){
    return(
        <div>
            <picture>
                <a href={setURL} target="_blank">
                    <img src={setSRC} className={setClassName} alt="icon"/>
                </a>
            </picture>
        </div>
    );
}