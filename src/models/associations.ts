import User from "./User";
import Address from "./Address";
import AddressExtraInfo from "./AddressExtraInfo";
import AcademicInfo from "./AcademicInfo";
import BankAccountInfo from "./BankAccountInfo";
import FormalEducationInfo from "./FormalEducationInfo";
import GovernmentInfo from "./GovernmentInfo";
import PersonalInfo from "./PersonalInfo";
import Profile from "./Profile";
import ScholarshipInfo from "./ScholarshipInfo";
import Skills from "./Skills";

Address.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

AddressExtraInfo.belongsTo(Address, {
  foreignKey: "address_id",
  targetKey: "id",
});

AcademicInfo.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

BankAccountInfo.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

FormalEducationInfo.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

GovernmentInfo.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

PersonalInfo.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

Profile.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

ScholarshipInfo.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

Skills.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});
