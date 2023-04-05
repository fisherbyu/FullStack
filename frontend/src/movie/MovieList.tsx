import React, { useEffect, useState } from "react";
import {Movie} from "../types/movie"

function MovieList() {
    //Define Display Data
    const [movieData, setMovieData] = useState<Movie[]>([]);
    //Only Update on Change
    useEffect (() => {
        //Fetch Data with Asyncronous Request
        const fetchData = async () => {
            const rsp = await fetch('https://localhost:4000/movie');
            const temp = await rsp.json();
            setMovieData(temp);
        }
        fetchData();
}, []);
    

    //Create Frontend Code
    return (
        <React.Fragment>
        <div className="row">
            <div className="col-10 mx-auto">
            <h1> My Movie Collection:</h1>
                {/* Define Head */}
                <table className="table table-bordered table-striped">
                    <thead className="font-weight-bold">
                        <tr>
                            <td>MovieID:</td>
                            <td>Title: </td>
                            <td>Category: </td>
                            <td>Year: </td>
                            <td>Director: </td>
                            <td>Rating: </td>
                            <td>Edited: </td>
                            <td>Lent To:</td>
                            <td>Notes: </td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map each item in data to table rows */}
                        {movieData.map((m) => (
                            <tr key={m.movieId}>
                                <td>{m.movieId}</td>
                                <td>{m.title}</td>
                                <td>{m.category}</td>
                                <td>{m.year}</td>
                                <td>{m.director}</td>
                                <td>{m.rating}</td>
                                <td>{m.edited}</td>
                                <td>{m.lentTo}</td>
                                <td>{m.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </React.Fragment>
    )
}

export default MovieList