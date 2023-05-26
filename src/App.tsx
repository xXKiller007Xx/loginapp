import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { getAllUsers } from "./apis/apis";
import "./App.css";
import { IUser } from "./interfaces/user";
import { CircularProgress } from "@mui/material";

const App: FunctionComponent = () => {
  const [t, i18n]: any = useTranslation();
  const [user, setUser]: any = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    const fetchUsers = async () => {
      setUser(await getAllUsers());
      setIsLoading(false);
    };
    fetchUsers();
  }, []);
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <div className="App">
      <h1>{t("title")}</h1>
      <p>{t("greeting")}</p>
      <button type="button" onClick={() => changeLanguage("en")}>
        English
      </button>
      <button type="button" onClick={() => changeLanguage("vi")}>
        Tiếng Việt
      </button>
      <button type="button" onClick={() => changeLanguage("zh")}>
        中文
      </button>
      <br />
      <br />
      <button>{t("button")}</button>
      <hr />
      <div className="App">
        <table className="main-table">
          <tr>
            <th>{t("name")}</th>
            <th>{t("username")}</th>
            <th>{t("email")}</th>
            <th>{t("phone")}</th>
            <th>{t("website")}</th>
          </tr>
          {user.map((user: IUser) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default App;
