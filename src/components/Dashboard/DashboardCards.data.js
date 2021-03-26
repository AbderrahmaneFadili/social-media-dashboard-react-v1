import { colors } from "../../Themes/themes";
const cards = [
  {
    //facebook
    socialIcon: require("../../images/icon-facebook.svg").default,
    socialAccount: "@nathanf",
    socialNumbers: 1987,
    socialTitle: "Followers",
    arrow: require("../../images/icon-up.svg").default,
    socialTodayNumbers: "12 Today",
    borderTopColor: colors.facebook,
    isBorderGradient: false,
    isSocialTodayDown: false,
  },
  {
    //twitter
    socialIcon: require("../../images/icon-twitter.svg").default,
    socialAccount: "@nathanf",
    socialNumbers: 1044,
    socialTitle: "Followers",
    arrow: require("../../images/icon-up.svg").default,
    socialTodayNumbers: "99 Today",
    borderTopColor: colors.twitter,
    isBorderGradient: false,
    isSocialTodayDown: false,
  },
  {
    //instagram
    socialIcon: require("../../images/icon-instagram.svg").default,
    socialAccount: "@realnathanf",
    socialNumbers: "11k",
    socialTitle: "Followers",
    arrow: require("../../images/icon-up.svg").default,
    socialTodayNumbers: "1099 Today",
    borderTopColorFrom: colors.instagramGradientFrom,
    borderTopColorTo: colors.instagramGradientTo,
    isBorderGradient: true,
    isSocialTodayDown: false,
  },
  {
    //youtube
    socialIcon: require("../../images/icon-youtube.svg").default,
    socialAccount: "Nathan F.",
    socialNumbers: 8239,
    socialTitle: "Subscribers",
    arrow: require("../../images/icon-down.svg").default,
    socialTodayNumbers: "144 Today",
    borderTopColor: colors.youtube,
    isBorderGradient: false,
    isSocialTodayDown: true,
  },
];

export default cards;
