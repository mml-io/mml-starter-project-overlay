export const getWebsocketUrl = () => {
  const protocol = location.protocol === "https:" ? "wss:" : "ws:";
  return `${protocol}//${location.host}${window.WEBSOCKET_PATH || ""}`;
};

export const getClientUrl = () => {
  return `${location.protocol}//${location.host}${window.CLIENT_PATH || ""}`;
};

export const hasClipboardPermission = async () => {
  try {
    await navigator.clipboard.writeText("");
    return true;
  } catch (e) {
    console.log("No clipboard permission");
    return false;
  }
};

export const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
};
