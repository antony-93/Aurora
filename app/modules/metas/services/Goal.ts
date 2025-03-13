import Goal from "../model/Goal";
import Database from "../../../database/Db"

class GoalService {
    async insertGoal({ description, category_id }: Goal) {
        try {
            await Database.getDatabase().runAsync(
                'INSERT INTO goal (description, category_id) VALUES (?, ?)',
                [description, category_id]
            )
        } catch (e) {
            console.log(e)
        }
    }

    async getGoalsGroupedByCategory(): Promise<any> {
        try {
            const resultados = await Database.getDatabase().getAllAsync(`
                SELECT c.id AS category_id, 
                       c.description AS category_description, 
                       c.icon, 
                       c.color, 
                       g.id AS goal_id, 
                       g.description AS goal_description, 
                       g.checked
                  FROM goal g
                  JOIN category c ON g.category_id = c.id
                 ORDER BY c.sequence ASC;
            `);

            const metasAgrupadas = resultados.reduce((acc: any, item: any) => {
                let categoria = acc.find((c: any) => c.id === item.category_id);

                if (!categoria) {
                    categoria = {
                        id: item.category_id,
                        description: item.category_description,
                        icon: item.icon,
                        color: item.color,
                        goals: []
                    };
                    acc.push(categoria);
                }

                categoria.goals.push({
                    id: item.goal_id,
                    description: item.goal_description, // ✅ Agora pega a descrição correta da meta
                    checked: item.checked
                });

                return acc;
            }, []);

            console.log(JSON.stringify(metasAgrupadas))

            return metasAgrupadas;
        } catch (e) {
            console.log("Erro ao buscar as categorias: ", e)
            return []
        }
    }
}

export default new GoalService();