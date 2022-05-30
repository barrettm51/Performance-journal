import { Navigate } from "react-router-dom";
import { useStytchSession } from "@stytch/stytch-react";

function PrivateRoute({ children }) {
    const session = useStytchSession();

    if(!session) return <Navigate to="/Login" replace />

    return children;
}

export default PrivateRoute;

