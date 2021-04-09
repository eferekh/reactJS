// npm i query-string (for faster extraction of url parameters)
import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
    // http://127.0.0.1/home?sortBy=newest&approved=true
    const { sortBy, approved } = queryString.parse(location.search);

    return (
        <div>
            <h1>Posts</h1>
            Year: {match.params.year}, Month: {match.params.month}
        </div>
    );
};

export default Posts;
