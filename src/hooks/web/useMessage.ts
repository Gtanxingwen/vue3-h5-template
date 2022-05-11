/**
 * @description: message
 */
export function useMessage() {
  return {
    createMessage: {
      success: (_message: any) => {},
      info: (_message: any) => {},
      error: (_message: any) => {},
      warn: (_message: any) => {},
    },
    createSuccessModal: (_options: any) => {},
    createErrorModal: (_options: any) => {},
    createInfoModal: (_options: any) => {},
    createWarningModal: (_options: any) => {},
  };
}
