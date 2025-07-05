import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";
import { List } from "@/components/List";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6,184,90" },
  output: { label: "saidas", value: "-R$ 883,65" },
};

const targets = [
  {
    id: "1",
    name: "Comprar uma cadeira ergonomica",
    percentage: "75%",
    current: "900,00",
    target: "12.000,00",
  },
  {
    id: "2",
    name: "Comprar um carro novo",
    percentage: "50%",
    current: "25.000,00",
    target: "100.000,00",
  },
  {
    id: "3",
    name: "Comprar um telefone novo",
    percentage: "10%",
    current: "1.000,00",
    target: "10.000,00",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />
      <List
        title="metas"
        data={[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Target data={item} />}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar uma."
        containerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  );
}
