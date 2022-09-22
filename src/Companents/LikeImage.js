export default function Likeimage(props){
    const {likeimage} = props;
    return(
        <>
        <span><img src={likeimage} alt="no photos" /></span>
        </>
    )
}