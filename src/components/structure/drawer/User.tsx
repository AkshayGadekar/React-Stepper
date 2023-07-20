import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { type Theme } from "@mui/material/styles";
import useStyles from "../../../hooks/useStyles";
import userImage from "../../../media/images/user.png";

const makeStylesUser = (theme: Theme, dependencies: any[]) => ({
  display: "flex",
  columnGap: ".5rem",
  padding: "1rem 1rem 1rem 1rem",
  [theme.breakpoints.up("sm")]: {
    padding: "1rem 1.5rem 1rem 1.5rem",
  },
});

const User = () => {
  const styles = useStyles(makeStylesUser, []);

  return (
    <Box sx={styles}>
      <UserImg />
      <UserInfo />
    </Box>
  );
};

export default User;

const UserImg = () => <Box component="img" src={userImage} />;

const makeStylesUserInfo = (theme: Theme, dependencies: any[]) => ({
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
  const styles = useStyles(makeStylesUserInfo, []);

  return (
    <Box sx={styles.container}>
      <Typography variant="thick" sx={styles.userName}>
        Dheeraj Katarya
      </Typography>
      <Typography variant="thin" sx={styles.companyTitle}>
        Phone.com
      </Typography>
    </Box>
  );
};
