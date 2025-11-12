import ContentPane from "./PANES/ContentPane";

type contextComponentProps = {
    selected: string;
    };

export default function ContextComponent({selected}:contextComponentProps){

    return(
        <div className=" flex justify-center glass-effect w-9/12 ">
            <ContentPane selected={selected}/>
        </div>
    );
}