import { TProviderBase } from "@shared/types/ProviderTypes";
import { TUser } from "@shared/types/UserTypes";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut as singOutFirebase, User } from "firebase/auth";
import { auth } from "FirebaseConfig";
import { createContext, FC, useContext, useEffect, useState } from "react";

type AuthContextData = {
    isAuthenticated: boolean;
    user: TUser
    signIn: (email: string, password: string) => void;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: FC<TProviderBase> = ({ children }) => {
    const [user, setUser] = useState<TUser>({} as TUser),
        [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            if (!user) return setIsAuthenticated(false);

            setIsAuthenticated(true);

            setUser({
                email: user.email ?? '',
                uid: user.uid
            })
        });

        return unsubscribe;
    }, []);

    async function signOut() {
        await singOutFirebase(auth);
    }

    async function signIn(email: string, password: string) {
        await signInWithEmailAndPassword(auth, email, password);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);