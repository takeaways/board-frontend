import Snackbar from "@material-ui/core/Snackbar";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorSelector, layoutAction } from "src/lib/redux/features/layout";
function ErrorMessage() {
  const dispatch = useDispatch();
  const { isError, errorMessage } = useSelector(errorSelector);

  const handleResetError = useCallback(() => {
    dispatch(layoutAction.resetError());
  }, [dispatch]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={isError}
      message={errorMessage}
      autoHideDuration={2500}
      onClose={handleResetError}
    />
  );
}

export default ErrorMessage;
