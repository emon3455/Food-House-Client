import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
    const {user} = useAuth();

    return (
        <div className="p-2">
            <h2 className="text-3xl font-bold ">Hii, Welcome Back: {user.displayName}</h2>

        </div>
    );
};

export default AdminHome;