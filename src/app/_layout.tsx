import { Suspense } from "react";
import { Stack } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { SQLiteProvider } from "expo-sqlite";

import { migrate } from "@/database/migrate";

import { colors } from "@/theme/colors";

import { Loading } from "@/components/Loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}> {/* esperar o ba de dados ser carregado */}
      <SQLiteProvider databaseName="target.db" onInit={migrate} useSuspense>  {/* carrega io banco de dados para toda aplicação */}
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.white },
          }}
        />
      </SQLiteProvider>
    </Suspense>
  );
}
