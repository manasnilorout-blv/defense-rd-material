export interface ProblemStatement {
  problemTitle: string;
  currentTechnology: string;
  possibleSolutions: string;
  studiesAndSuccessRate: string;
  aiMlFusionPossibilities: string;
}

export type SectionKey = 'currentTechnology' | 'possibleSolutions' | 'studiesAndSuccessRate' | 'aiMlFusionPossibilities';

export interface TabConfig {
  key: SectionKey;
  label: string;
  icon: string;
}
