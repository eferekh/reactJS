// npm install react-toastify@4.1
// create a user on sentry.io
// npm install --save @sentry/react @sentry/tracing

import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import http from "./services/httpService";
import config from "./config.json";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
    state = {
        posts: [],
    };

    componentDidMount = async () => {
        const { data: posts } = await http.get(config.apiEndpoint);

        this.setState({ posts });
    };

    handleAdd = async () => {
        const obj = { title: "a", body: "b" };

        const { data: post } = await http.post(config.apiEndpoint, obj);

        const posts = [post, ...this.state.posts];
        this.setState({ posts });
    };

    handleUpdate = async (post) => {
        post.title = "Updated";

        // In put we send the whole object to be updated.
        await http.put(`${config.apiEndpoint}/${post.id}`, post);

        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = { ...post };
        this.setState({ posts });

        // In patch we can only update certain properties.
        // axios.patch(`${apiEndpoint}/${post.id}`, { title: post.title });
    };

    handleDelete = async (post) => {
        const originalPosts = this.state.posts;

        const posts = this.state.posts.filter((p) => p.id !== post.id);
        this.setState({ posts });

        try {
            await http.delete("s" + config.apiEndpoint + "/" + post.id);

            // throw new Error("123");
        } catch (exception) {
            if (exception.response && exception.response.status === 404)
                alert("This post has already been deleted.");

            this.setState({ posts: originalPosts });
        }
    };

    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>
                                    <button
                                        className="btn btn-info btn-sm"
                                        onClick={() => this.handleUpdate(post)}
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => this.handleDelete(post)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default App;
