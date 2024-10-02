import {lazy, Suspense} from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import boardRouter from "./boardRouter.jsx";
import notificationRouter from "./notificationRouter.jsx";
import memberRouter from "./memberRouter.jsx";

const Loading = <Box sx={{ display: 'flex' }}><CircularProgress /></Box>

const Main = lazy(()=> import("../pages/MainPage.jsx"))
const ListBasic = lazy(()=> import("../pages/board/list/ListBasicPage.jsx"))
const BoardIndex = lazy(()=> import("../pages/board/IndexPage.jsx"))
const NotificationIndex = lazy(()=> import("../pages/notification/IndexPage.jsx"))
const MemberIndex = lazy(()=> import("../pages/member/IndexPage.jsx"))

const root = createBrowserRouter([
  {
    path:'',
    element:<Suspense fallback={Loading}><Main/></Suspense>,
    children:[
      {
        path: 'list',
        element: <Suspense fallback={Loading}><ListBasic/></Suspense>
      },
      {
        path: '',
        element: <Navigate replace to={'list'}/>
      },
      {
        path: 'list/latest',
        element: ''
      }
    ]
  },
  {
    path:'board',
    element:<Suspense fallback={Loading}><BoardIndex/></Suspense>,
    children: boardRouter()
  },
  {
    path:'notification',
    element:<Suspense fallback={Loading}><NotificationIndex/></Suspense>,
    children: notificationRouter()
  },
  {
    path:'member',
    element:<Suspense fallback={Loading}><MemberIndex/></Suspense>,
    children: memberRouter()
  }
])

export default root