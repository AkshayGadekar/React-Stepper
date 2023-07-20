import React from "react";
import { useEffect } from "react";
import nProgress from "nprogress";

const SuspenseProgressBar = () => {
  useEffect(() => {
    nProgress.configure({ showSpinner: false });
    nProgress.start();

    return () => {
      nProgress.done();
    };
  });

  return <></>;
};

export default SuspenseProgressBar;
