export const fetchUnreadCount = async (): Promise<number> => {
  // simulate API latency
  await new Promise((res) => setTimeout(res, 400));

  // later: return response.data.count
  return Math.floor(Math.random() * 10); // demo value
};
