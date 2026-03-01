import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TrackedDateCard } from "../components/TrackedDateCard";
import { TrackedDateItem } from "../models/trackedDate";

type Props = {
  items: TrackedDateItem[];
};

export function CountdownListScreen({ items }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TimeMinder</Text>
      <Text style={styles.subheader}>Your meaningful dates</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={items.length === 0 ? styles.emptyContainer : styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => <TrackedDateCard item={item} />}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>No dates yet</Text>
            <Text style={styles.emptyText}>Add your first meaningful date to get started.</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 12,
  },
  subheader: {
    marginTop: 6,
    marginBottom: 18,
    color: "#6b7280",
  },
  listContent: {
    paddingBottom: 24,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  empty: {
    alignItems: "center",
    paddingHorizontal: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  emptyText: {
    marginTop: 8,
    color: "#6b7280",
    textAlign: "center",
  },
});