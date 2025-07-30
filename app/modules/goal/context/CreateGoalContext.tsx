import { createContext, FC, useContext, useState } from "react";
import { TGoal } from "../types/Goal";
import { TProviderBase } from "@shared/types/ProviderTypes";
import { useAuth } from "@shared/context/AuthContext";
import { TGoalCategory } from "../types/GoalCategory";

type CreateGoalContextData = {
    goalData: Omit<TGoal, 'id'>;
    goalCategory: TGoalCategory;

    handleSetGoalCategory: (goalCategory: TGoalCategory) => void;
    setDescription: (description: string) => void;
}

const CreateGoalContext = createContext<CreateGoalContextData>({} as CreateGoalContextData);

export const CreateGoalProvider: FC<TProviderBase> = ({ children }) => {
    const { user } = useAuth();

    const [goalData, setGoalData] = useState<Omit<TGoal, 'id'>>({
        description: '',
        lowerDescription: '',
        goalCategoryId: '',
        isCompleted: false,
        userId: user.uid
    });

    const [goalCategory, setGoalCategory] = useState<TGoalCategory>({} as TGoalCategory);
   
    const handleSetGoalCategory = (goalCategory: TGoalCategory) => {
        setGoalCategory(goalCategory);
        
        setGoalData(prev => ({
            ...prev,
            goalCategoryId: goalCategory.id
        }));
    };

    const setDescription = (description: string) => {
        setGoalData(prev => ({
            ...prev,
            description,
            lowerDescription: description.toLowerCase()
        }));
    };

    return (
        <CreateGoalContext.Provider value={{
            goalData,
            goalCategory,
            handleSetGoalCategory,
            setDescription
        }}>
            {children}
        </CreateGoalContext.Provider>
    );
}

export const useCreateGoal = () => useContext(CreateGoalContext);