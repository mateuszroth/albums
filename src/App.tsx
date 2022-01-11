import React from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Albums from "./features/albums/Albums";
import AlbumsList from "./features/albumsList/AlbumsList";
import AlbumsDetails from "./features/albumDetails/AlbumDetails";
import AlbumEdit from "./features/albumEdit/AlbumEdit";
import AlbumAdd from "./features/albumAdd/AlbumAdd";

const { Header, Content, Footer } = Layout;
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="albums">
                <Link to="/">Albums</Link>
              </Menu.Item>
              <Menu.Item key="addAlbum">
                <Link to="/add">Add album</Link>
              </Menu.Item>
            </Menu>
          </Header>

          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <Routes>
                <Route path="/" element={<Albums />}>
                  <Route index element={<AlbumsList />} />
                  <Route path=":id" element={<AlbumsDetails />} />
                  <Route path=":id/edit" element={<AlbumEdit />} />
                  <Route path="add" element={<AlbumAdd />} />
                </Route>
              </Routes>
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}>Mateusz Roth ©2022</Footer>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
