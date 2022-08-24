export default function Verdict(props) {
    const {celsius} = props;
    if(celsius>=100) {
        return <h1>The water would boil</h1>;
    }
    return <h1>The water would not boil</h1>;
}