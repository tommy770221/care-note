export class ActionPlan {
    actionItem: string;
    targetDate: string;
    whatToDo: string;
    goal: string;
    date: string;
    projectTitle: string;
    projectLead: string;
    notes: string;
    resources: string;
    consultation: string[];
    timeFrame: string;
    evaluation: string;
  
    constructor(init?: Partial<ActionPlan>) {
      Object.assign(this, init);
    }
}
