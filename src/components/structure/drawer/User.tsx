import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles, type Theme } from "mui-styles-hook";
import { UserStyles, UserInfoStyles } from "../../../types/styles";
import userImage from "../../../media/images/user.png";

const useStylesUser = makeStyles<UserStyles>((theme: Theme) => ({
  box: {
    display: "flex",
    columnGap: ".5rem",
    padding: "1rem 1rem 1rem 1rem",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem 1.5rem 1rem 1.5rem",
    },
  },
}));
const User = () => {
  const styles = useStylesUser();

  return (
    <Box sx={styles.box}>
      <UserImg />
      <UserInfo />
    </Box>
  );
};

export default User;

const UserImg = () => <Box component="img" src={userImage} />;

const useStylesUserInfo = makeStyles<UserInfoStyles>({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  userName: {
    lineHeight: 1.2,
  },
  companyTitle: {
    lineHeight: 1.2,
  },
});
const UserInfo = () => {
  const styles = useStylesUserInfo();

  return (
    <Box sx={styles.container}>
      <Typography variant="thick" sx={styles.userName}>
        Matthew Wade
      </Typography>
      <Typography variant="thin" sx={styles.companyTitle}>
        Abc.co
      </Typography>
    </Box>
  );
};
