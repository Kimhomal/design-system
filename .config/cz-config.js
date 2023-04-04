module.exports = {
  types: [
    { value: 'feat', name: 'feat:     기능 추가' },
    { value: 'fix', name: 'fix:      버그 수정' },
    { value: 'docs', name: 'docs:     문서 작성' },
    {
      value: 'style',
      name: 'style:    주석, 코드 스타일(세미콜론 등) 변경\n            코드 및 기능에 영향 없음',
    },
    {
      value: 'refactor',
      name: 'refactor: 리팩토링',
    },
    {
      value: 'perf',
      name: 'perf:     성능개선',
    },
    { value: 'test', name: 'test:     테스트 코드 작성' },
    {
      value: 'chore',
      name: 'chore:    코드 또는 문서 외 모든 변경\n            폴더 이동, 파일명 변경, 이미지 추가 등',
    },
    { value: 'revert', name: 'revert:   Revert to a commit' },
    { value: 'WIP', name: 'WIP:      Work in progress' },
  ],
  typePrefix: '[',
  typeSuffix: ']',
  subjectSeparator: ' ',

  // scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

  usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: '#',
  ticketNumberRegExp: '\\d{1,5}',
  // it needs to match the value for field type. Eg.: 'fix'
  /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '작업 유형 선택:',
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '커밋 메시지 작성:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'ISSUE 번호 입력 (optional) E.g.: #31, #34:\n',
    confirmCommit:
      'Are you sure you want to proceed with the commit above?(y/n)',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['scope', 'body', 'breaking'],
  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  footerPrefix: 'ISSUES CLOSED:',
  // askForBreakingChangeFirst : true, // default is false
};
