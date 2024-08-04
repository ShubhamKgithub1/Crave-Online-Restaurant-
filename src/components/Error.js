import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    // console.log(err);
    return (
        <div className="error">
            <h1>Oops!!! Something went wrong..</h1>
            <h3>{err.status}:{err.statusText}</h3>

        </div>
    );
};

export default Error;