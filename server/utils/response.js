export const response = (res, status, data="", message="successfully") => {
  return res.status(status).json({
    error: false,
    message,
    data
  });
};
