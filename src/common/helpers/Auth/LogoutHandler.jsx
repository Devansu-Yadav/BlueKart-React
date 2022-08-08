import { useUserData, useAuth } from "common/context";
import { USER_LOGOUT } from "common/constants";
import { toast } from "react-toastify";

const useLogoutHandler = () => {
    const { userDataDispatch, initialUserData } = useUserData();
    const { setIsUserAuthenticated, setUserAuthToken } = useAuth();

    const logoutHandler = () => {
        localStorage.setItem("authToken", "");
        setIsUserAuthenticated(false);
        setUserAuthToken("");
        userDataDispatch({ type: USER_LOGOUT, payload: initialUserData });
        toast.success("User logged out successfully!");
    };

    return { logoutHandler };
};

export { useLogoutHandler };
