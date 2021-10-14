//Transfer component into another component
//Adding additional functionalities to the existing components

import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layout/Default.layout";


const DefaultHOC = ({component: Component ,...rest}) => {
    return (
      <>
      <Route
      {...rest}
      component = {(props) => (
        <DefaultLayout>
        <Component {...props} />
        </DefaultLayout>
      )
    }
    />
      </>
    )
};

export default DefaultHOC;
