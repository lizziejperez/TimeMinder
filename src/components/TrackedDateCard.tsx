import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TrackedDateItem } from "../models/trackedDate";
import { formatBirthday, formatCountdown } from "../utils/dates";

type Props = {
  item: TrackedDateItem;
};

export function TrackedDateCard({ item }: Props) {
  const badge =
    item.kind === "birthday"
      ? formatBirthday(item.dateISO).badgeText
      : formatCountdown(item.dateISO).text;

  const subtitle =
    item.kind === "birthday"
      ? formatBirthday(item.dateISO).subtitleText
      : `Target: ${new Date(item.dateISO).toLocaleDateString()}`;

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      </View>

      <Text style={styles.subtle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    marginRight: 10,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#f3f4f6",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  subtle: {
    marginTop: 8,
    fontSize: 12,
    color: "#6b7280",
  },
});