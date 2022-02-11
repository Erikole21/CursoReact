import React from "react";
import { Link, withRouter } from "react-router-dom";

const PlanRedux = (props) => {

    const { match: { url } } = props;

    return (<div>
        <h1>Redux</h1>
        <Link to={`${url}/jsx`}>
            Jsx Redux
        </Link>
        <Link to={`${url}/Hooks`}>
            Hooks Redux
        </Link>
    </div>)
}

export default withRouter(PlanRedux);