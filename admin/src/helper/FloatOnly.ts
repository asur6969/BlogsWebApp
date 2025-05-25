export const FloatOnly = (
  e: React.KeyboardEvent<HTMLInputElement>,
  step = 1.0,
) => {
  const allowedKeys = [
    "Backspace",
    "Tab",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
    "Enter",
    "Control",
  ];

  // allows all Ctrl command shortcuts like , cut , copy , paste and select all.
  const isCtrlCmd = e.ctrlKey || e.metaKey;
  if (
    isCtrlCmd &&
    ["a", "c", "v", "x"].includes(e.key.toLowerCase()) // ctrl/cmd shortcuts
  ) {
    return;
  }

  const input = e.currentTarget;
  const value = input.value;
  const target = e.target as HTMLInputElement;
  const currentValue = parseFloat(target.value) || 0;

  // Allow only one dot and digits
  if (!/^\d$/.test(e.key) && e.key !== "." && !allowedKeys.includes(e.key)) {
    e.preventDefault();
  }

  // Prevent second dot
  if (e.key === "." && value.includes(".")) {
    e.preventDefault();
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();
    target.value = String(currentValue + parseFloat(step.toString())); // assign new target value
    const inputEvent = new Event("input", { bubbles: true });
    target.dispatchEvent(inputEvent);
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();
    target.value = String(currentValue - parseFloat(step.toString())); // assign new target value
    const inputEvent = new Event("input", { bubbles: true });
    target.dispatchEvent(inputEvent);
  }
};
