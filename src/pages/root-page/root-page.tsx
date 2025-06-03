import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { useEffect } from "react";
import {
  localStorageService,
  LocalStorageVariableName,
} from "../../services/local-storage-service";
import { User } from "../../mocks/view-models/user";
import { links } from "../../configs/links";
import './root-page.scss'

export const RootPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let user = localStorageService.getValue<User>(
      LocalStorageVariableName.user
    );
    if (user == null) {
      navigate(links.login);
    }
  }, [1]);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
