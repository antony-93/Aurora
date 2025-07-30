import Toast from 'react-native-toast-message';

export const useToast = () => {
  const showSuccess = (message: string, title?: string) => {
    Toast.show({
      type: 'success',
      text1: title || 'Sucesso',
      text2: message,
      position: 'top',
      visibilityTime: 4000,
    });
  };

  const showError = (message: string, title?: string) => {
    Toast.show({
      type: 'error',
      text1: title || 'Erro',
      text2: message,
      position: 'top',
      visibilityTime: 5000,
    });
  };

  const showWarning = (message: string, title?: string) => {
    Toast.show({
      type: 'warning',
      text1: title || 'Atenção',
      text2: message,
      position: 'top',
      visibilityTime: 4000,
    });
  };

  const showInfo = (message: string, title?: string) => {
    Toast.show({
      type: 'info',
      text1: title || 'Informação',
      text2: message,
      position: 'top',
      visibilityTime: 3000,
    });
  };

  const hideToast = () => {
    Toast.hide();
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    hideToast,
  };
}; 