import photo from "../../../assets/image/map.webp";
import {Photo} from "../../../components/Photo/Photo";

export const Map = () => {
    return (
        <div>
            <Photo width={"970"} height={"300"} objectFit={"cover"} src={photo}/>
        </div>
    )
}