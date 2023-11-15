// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  greenLeaf: {
    primary: colors.blueGrey.base, // primary main
    primarylight: colors.blueGrey.lighten4, // primary light
    primarydark: colors.blueGrey.darken4, // primary dark
    secondary: colors.blueGrey.base, // secondary main
    secondarylight: colors.blueGrey.lighten4, // secondary light
    secondarydark: colors.blueGrey.darken3, // secondary dark
    accent: colors.cyan.base, // accent main
    accentlight: colors.cyan.lighten4, // accent light
    accentdark: colors.cyan.darken4, // accent dark
    anchor: colors.green.base, // link
  },
};

const theme = {
  ...palette.greenLeaf,
};

export default theme;
