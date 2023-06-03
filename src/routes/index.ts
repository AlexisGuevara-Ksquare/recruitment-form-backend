import { Router } from "express";
import users from "./user.route";
import personalInfo from "./personalInfo.route";
import address from "./address.route";
import addressExtraInfo from "./addressExtraInfo.route";
import govermentInfo from "./governmentInfo.route";
import profile from "./profile.route";
import academicInfo from "./academicInfo.router";
import formalEducationInfo from "./formalEducationInfo.router";
import scholarship from "./scholarshipInfo.router";
import bankAccountInfo from "./bankAccountInfo.router";
import skills from "./skills.router";

export const v1 = Router();

v1.use("/users", users);
v1.use("/personalInfo", personalInfo);
v1.use("/address", address);
v1.use("/addressExtraInfo", addressExtraInfo);
v1.use("/govermentInfo", govermentInfo);
v1.use("/profile", profile);
v1.use("/academicInfo", academicInfo);
v1.use("/formalEducationInfo", formalEducationInfo);
v1.use("/scholarship", scholarship);
v1.use("/bankAccountInfo", bankAccountInfo);
v1.use("/skills", skills);
