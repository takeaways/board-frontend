import { Box } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { isLoadingSelector } from "src/lib/redux/features/layout";

const useStyles = makeStyles(() =>
  createStyles({
    backdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: 0,
      width: "100%",
      height: "100%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.3)",
    },
  })
);

function Loading() {
  const classes = useStyles();
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);
  return isLoading
    ? createPortal(
        <Box className={classes.backdrop}>
          <CircularProgress color="inherit" />
        </Box>,
        document.getElementById("modal")!
      )
    : null;
}

export default Loading;
