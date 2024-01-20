export interface ISkillGroup {
  groupName: string;
  skillList: ISkill[];
}

export interface ISkill {
  iconId: string;
  skillName: string;
}

export const skillGroups: ISkillGroup[] = [
  {
    groupName: 'Languages',
    skillList: [
      { iconId: 'html5', skillName: 'HTML 5' },
      { iconId: 'css3', skillName: 'CSS 3' },
      { iconId: 'javascript', skillName: 'JavaScript' },
      { iconId: 'typescript', skillName: 'TypeScript 5' },
      { iconId: 'sass', skillName: 'SCSS/SASS' },
      { iconId: 'csharp', skillName: 'C♯' },
    ],
  },
  {
    groupName: 'Frameworks',
    skillList: [
      { iconId: 'angular', skillName: 'Angular 17' },
      { iconId: 'nestjs', skillName: 'NestJS' },
      { iconId: '11ty', skillName: 'Eleventy' },
      { iconId: 'dotnet', skillName: '.NET Core' },
      { iconId: 'node', skillName: 'Node.js' },
      { iconId: 'npm', skillName: 'NPM' },
      { iconId: 'bootstrap', skillName: 'Bootstrap' },
      { iconId: 'tailwind', skillName: 'Tailwind CSS' },
      { iconId: 'rxjs', skillName: 'RXJS' },
      { iconId: 'eslint', skillName: 'ES Lint' },
      { iconId: 'gulp', skillName: 'Gulp' },
      { iconId: 'jest', skillName: 'Jest' },
      { iconId: 'jasmine', skillName: 'Jasmine' },
      { iconId: 'karma', skillName: 'Karma' },
      { iconId: 'jquery', skillName: 'jQuery' },
    ],
  },
  {
    groupName: 'Software',
    skillList: [
      { iconId: 'git', skillName: 'GIT' },
      { iconId: 'github', skillName: 'Github' },
      { iconId: 'vscode', skillName: 'VS Code' },
      { iconId: 'visualstudio', skillName: 'Visual Studio' },
      { iconId: 'photoshop', skillName: 'Photoshop' },
      { iconId: 'illustrator', skillName: 'Illustrator' },
      { iconId: 'xd', skillName: 'Adobe XD' },
      { iconId: 'lightroom', skillName: 'Lightroom' },
      { iconId: 'jira', skillName: 'Jira' },
      { iconId: 'trello', skillName: 'Trello' },
    ],
  },
];
