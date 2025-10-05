import React from 'react';
import { createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { Component } from 'lucide-react';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/bookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
    {
        index: true,
        path: "/",
        Component: Home,
    },
    {
      path: '/about',
      Component: About,
    },
    {
      path: '/bookDetails/:id',
      Component: BookDetails,
      loader: () => 
        fetch('/booksData.json')},
    ]
  },
]);