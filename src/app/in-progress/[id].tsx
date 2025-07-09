import { useCallback, useState } from "react";

import { View, Alert } from "react-native";
import { useLocalSearchParams, router, useFocusEffect } from "expo-router";

import { List } from "@/components/List";
import { Button } from "@/components/Button";
import { Loading } from "@/components/Loading";
import { Progress } from "@/components/Progress";
import { PageHeader } from "@/components/PageHeader";
import { Transaction } from "@/components/Transaction";

import { TransactionTypes } from "@/utils/TransactionTypes";

import { numberToCurrency } from "@/utils/numberToCurrency";
import { useTargetDatabase } from "@/database/useTargetDatabase";

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
  const [isFetching, setIsFetching] = useState(true);
  const [details, setDetails] = useState({
    name: "",
    current: "R$ 0,00",
    target: "R$ 0,00",
    percentage: 0,
  });
  const params = useLocalSearchParams<{ id: string }>();

  const targetDatabase = useTargetDatabase();

  async function fetchDetails() {
    try {
      const response = await targetDatabase.show(Number(params.id));
      setDetails({
        name: response.name,
        current: numberToCurrency(response.current),
        target: numberToCurrency(response.amount),
        percentage: response.percentage,
      });
    } catch (error) {
      Alert.alert("Não foi possível carregar os detalhes da meta");
      console.log("Erro ao buscar detalhes da meta:", error);
    }
  }

  async function fetchData() {
    const fetchDatailsPromise = fetchDetails();

    await Promise.all([fetchDatailsPromise]);
    setIsFetching(false);
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1, padding: 24, paddingBottom: 32 }}>
      <PageHeader
        title={details.name}
        rightButton={{
          icon: "edit",
          onPress: () => router.navigate(`/target?id=${params.id}`),
        }}
      />
      <Progress data={details} />
      <List
        title="Transações"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => {}} />
        )}
        emptyMessage="Nenhuma transação. Toque em nova transação para guardar seu primeiro dinheiro aqui."
      />
      <Button
        title="Nova transação"
        onPress={() => router.navigate(`/transaction/${params.id}`)}
      />
    </View>
  );
}
