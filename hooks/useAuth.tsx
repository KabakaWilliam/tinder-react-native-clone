import { View, Text } from "react-native";
import React, { createContext, useContext } from "react";

type userType = {
  user: string | null;
  userPresent?: boolean;
};
const AuthContext = createContext<userType>({
  user: null,
  userPresent: false,
});

export const AuthProvider: React.FC<any> = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: null, userPresent: false }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}

// export const AuthProvider =
//   <P extends any>(children: ComponentType<P>): React.FC<P> =>
//   (props) => {
//     return <View>{children}</View>;
//   };
