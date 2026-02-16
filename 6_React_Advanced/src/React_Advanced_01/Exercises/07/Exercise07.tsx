import { useState, ChangeEvent, FormEvent } from "react";

interface Goal {
    goal: string;
    by: string;
}

interface GoalFormProps {
    onAddGoal: (goal: Goal) => void;
}

function GoalForm({ onAddGoal }: GoalFormProps) {
    const [formData, setFormData] = useState<Goal>({ goal: "", by: "" });

    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function submitHandler(e: FormEvent) {
        e.preventDefault();
        onAddGoal(formData);
        setFormData({ goal: "", by: "" });
    }

    return (
        <div>
            <h1>Add Goal</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="goal" onChange={changeHandler} required placeholder="Goal" value={formData.goal} />
                <input type="text" name="by" onChange={changeHandler} required placeholder="By..." value={formData.by} />
                <button type="submit">Add Goal</button>
            </form>
        </div>
    );
}

interface ListOfGoalsProps {
    goals: Goal[];
}

function ListOfGoals({ goals }: ListOfGoalsProps) {
    return (
        <div>
            <h1>Goals</h1>
            <ul>
                {goals.map((goal, index) => (
                    <li key={index}>{goal.goal} - {goal.by}</li>
                ))}
            </ul>
        </div>
    );
}

export default function Exercise07() {
    const [allGoals, updateAllGoals] = useState<Goal[]>([]);

    function addGoal(goal: Goal) { updateAllGoals([...allGoals, goal]); }

    return (
        <div>
            <GoalForm onAddGoal={addGoal} />
            <ListOfGoals goals={allGoals} />
            <label> {allGoals.length} goals </label>
        </div>
    );
}