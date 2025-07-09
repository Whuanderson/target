import { useState, useEffect } from "react";
import { Alert, StatusBar, View } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { CurrencyInput } from "@/components/CurrencyInput";

import { useTargetDatabase } from "@/database/useTargetDatabase";

export default function Target() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const params = useLocalSearchParams<{ id?: string }>();
  const targetDatabase = useTargetDatabase();

  function handleSave() {
    if (!name.trim() || amount <= 0) {
      return Alert.alert("Atenção", "Preencha nome e valor maior que zero.");
    }
    setIsProcessing(true);

    if (params.id) {
      update();
    } else {
      create();
    }

    async function update() {
      try {
        await targetDatabase.update({
          id: Number(params.id),
          name,
          amount,
        });
        Alert.alert("Meta atualizada", "meta atualizada com sucesso!", [
          {
            text: "OK",
            onPress: () => router.back(),
          },
        ]);
      } catch (error) {
        Alert.alert("Erro ao atualizar meta");
        console.log(error);
        setIsProcessing(false);
      }
    }

    async function create() {
      try {
        await targetDatabase.create({ name, amount });
        Alert.alert("Nova meta", "meta criada com sucesso!", [
          {
            text: "OK",
            onPress: () => router.back(),
          },
        ]);
      } catch (error) {
        Alert.alert("Erro ao criar meta");
        console.log(error);
        setIsProcessing(false);
      }
    }
  }

  async function fetchDetails(id: number) {
    try {
      const response = await targetDatabase.show(id);
      setName(response.name);
      setAmount(response.amount);
    } catch (error) {
      Alert.alert("Erro, não foi possivel carregar os detalhes da meta.");
      console.log(error);
    }
  }

  function handleRemove() {
    if (!params.id) {
      return;
    }
    Alert.alert("Atenção", "Deseja remover esta meta?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        onPress: remove,
      },
    ]);
  }

  async function remove() {
    try {
      setIsProcessing(true);

      await targetDatabase.remove(Number(params.id));
      Alert.alert("Meta", "Meta removida com sucesso!", [
        {
          text: "OK",
          onPress: () => router.replace("/"),
        },
      ]);
    } catch (error) {
      Alert.alert("Não foi possivel remover a meta remover meta");
      console.log(error);
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchDetails(Number(params.id));
    }
  }, [params.id]);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <StatusBar barStyle="dark-content" />
      <PageHeader
        title="Meta"
        subtitle="Economize para alcaçar sua meta financeira."
        rightButton={
          params.id
            ? {
                icon: "delete",
                onPress: () => handleRemove(),
              }
            : undefined
        }
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Nome da meta"
          placeholder="Ex: Viagem para praia, Apple Watch"
          onChangeText={setName}
          value={name}
        />
        <CurrencyInput
          label="Valor da alvo (R$)"
          value={amount}
          onChangeValue={setAmount}
        />
        <Button
          title="Salvar"
          onPress={handleSave}
          isProcessing={isProcessing}
        />
      </View>
    </View>
  );
}
