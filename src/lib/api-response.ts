export const sendSuccessResponse = (message: string, status: number) => {
  return Response.json({
    status,
    body: {
      success: true,
      message,
    },
  });
};

export const sendErrorResponse = (message: string, status: number) => {
  return Response.json({
    status,
    body: {
      success: false,
      message,
    },
  });
};
