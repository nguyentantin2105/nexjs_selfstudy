/* 
pageProps = {
    users: [],
    posts:[],
    isLogin: true
}
{...pageProps}
*/

// export default function MyApp({Component, pageProps}){
//     //Component  -> Dai dien cho 1 Page dc khop voi url do nextjs xu li
//     return <Component {...pageProps} />
// }

import React from "react";
import Head from "next/head";
import {AppProps} from "next/app";

// export default class CustomApp extends React.Component<AppProps> {
//      render(){
//          return (
//              <div className="root-app">
//                  <Head>
//                      <title>Create Next App Edit</title>
//                      <link rel="icon" href="/favicon.ico"/>
//                  </Head>
//                  <this.props.Component {...this.props.pageProps} />
//              </div>
//          )
//      } 
// }

const CustomApp:React.FC<AppProps> = ({Component, pageProps}) => {
    return (
            <div className="root-app">
                <Head>
                    <title>Create Next App Edit</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Component {...pageProps} />
            </div>
        )
}

export default CustomApp;