import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { List } from "@/components/List";
import { Progress } from "@/components/Progress";
import { PageHeader } from "@/components/PageHeader";
import { Transaction } from "@/components/Transaction";
import { TransactionTypes } from "@/utils/TransactionTypes";


const details = {
  current: "R$ 580,00",
  target: "R$ 1.790,00",
  percentage: 55,
};

const transactions = [
  {
    id: "1",
    value: "R$ 100,00",
    date: "01/10/2023",
    description: "Compra de tênis",
    type: TransactionTypes.Output,
  },
  {
    id: "2",
    value: "R$ 200,00",
    date: "05/10/2023",
    description: "Venda de celular",
    type: TransactionTypes.Input,
  },
  {
    id: "3",
    value: "R$ 300,00",
    date: "10/10/2023",
    description: "Pagamento de salário",
    type: TransactionTypes.Input,
  },
];

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{
          icon: "edit",
          onPress: () => console.log("Edit button pressed"),
        }}
      />
      <Progress data={details} />
      <List
        title="Transações"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => {}} />
        )}
      />
    </View>
  );
}
