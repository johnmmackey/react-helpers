import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserStore } from "../../CustomHooks/useUserStore";

const AuthenticatedRoutes = (props) => {
  const user = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (user.isValid && !user.username)
      timer = setTimeout(() => navigate(props.redirect), 200);

    if (timer)
      return () => clearTimeout(timer);
  })

  return (
    <>
      {user.isValid && user.username &&
        <Outlet />
      }
      {user.isValid && !user.username &&
        <p>Loading Login page...</p>
      }
    </>
  )
}

export { AuthenticatedRoutes }
