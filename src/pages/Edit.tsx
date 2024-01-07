import { useParams } from "wouter";

export default function Edit(){

    const { id } = useParams();

    return (
        <p>ID: {id}</p>
    )
}