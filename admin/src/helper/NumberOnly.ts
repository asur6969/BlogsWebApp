export const NumbersOnly = (
  e: React.KeyboardEvent<HTMLInputElement>,
  step = 1,
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

  const isNumberKey = /^[0-9]$/.test(e.key);

  if (!isNumberKey && !allowedKeys.includes(e.key)) {
    e.preventDefault(); // block anything that's not a number or allowed control key
  }

  const target = e.target as HTMLInputElement;
  const currentValue = parseInt(target.value) || 0;

  if (e.key === "ArrowUp") {
    e.preventDefault();
    target.value = String(currentValue + step);
    const inputEvent = new Event("input", { bubbles: true });
    target.dispatchEvent(inputEvent);
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();
    target.value = String(currentValue - step);
    const inputEvent = new Event("input", { bubbles: true });
    target.dispatchEvent(inputEvent);
  }
};
