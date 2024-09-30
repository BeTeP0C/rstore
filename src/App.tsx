import React from "react";
import "./normalize.global.scss"
import "./main.global.scss";
import {hot} from "react-hot-loader/root"
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import {Content} from "./shared/Content/Content";
import { Products } from "./shared/Products/Products";

function AppComponent () {
  return (
    <Layout>
      <Header/>
      <Content>
        <Products/>
      </Content>
    </Layout>
  )
} 

export const App = hot(AppComponent);
