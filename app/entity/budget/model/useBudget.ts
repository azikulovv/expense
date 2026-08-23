export const useBudget = () => {
  const incoming = useState("incoming", () => 100000);
  const outcoming = useState("outcoming", () => 50000);

  const percentage = computed(() => {
    if (!incoming.value) return 0;

    return Math.min(Math.round((outcoming.value / incoming.value) * 100), 100);
  });

  const deposit = (amount: number) => {
    incoming.value += amount;
  };

  const withdraw = (amount: number) => {
    outcoming.value -= amount;
  };

  return { incoming, outcoming, percentage, deposit, withdraw };
};
