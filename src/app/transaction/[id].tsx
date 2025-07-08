import { useState } from "react";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { CurrencyInput } from "@/components/CurrencyInput";
import { TransactionType } from "@/components/TransactionType";
import { TransactionTypes } from "@/utils/TransactionTypes";

export default function Transaction() {
  const [type, setType] = useState(TransactionTypes.Input);
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Nova Transação"
        subtitle="A cada valor guardado você fica mais próximo da sua meta. Se esforce para guardar e evitar retirar."
      />
      <View style={{ marginTop: 32, gap: 24 }}>
        <TransactionType selected={type} onChange={setType} />

        <CurrencyInput label="Valor (R$)" value={0} />
        <Input
          label="Motivo (opcional)"
          placeholder="Ex: investir em CDB 110% no banco XP"
        />
        <Button title="Salvar" />
      </View>
    </View>
  );
}
