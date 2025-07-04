import { ActivityIndicator } from "react-native";

import { style } from "./styles";
import { colors } from "@/theme/colors";

export function Loading() {
  return (
    <ActivityIndicator
    style={style.container}
    color={colors.blue[500]}
    />
  );
}

