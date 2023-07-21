export interface Theme {
  colors: {
    [key: string]: string;
  };
  fontSize: {
    [key: string]: [string, string];
  };
  fontWeight: {
    [key: string]: number;
  };
  buttonSizes: {
    [key: string]: {
      height: string;
      padding: string;
      fontSize: string;
    };
  };
  screens: {
    [key: string]: string;
  };
  spacing: {
    [key: string]: string;
  };
  buttonVariants: {
    [key: string]: {
      backgroundColor: string;
      color: string;
      border?: string;
      '&:hover': {
        backgroundColor: string;
        color?: string;
      };
      '&:disabled': {
        backgroundColor: string;
        color?: string;
      };
    };
  };
}
