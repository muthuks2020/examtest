import getCodeContent from '../components/CodeContent'
import getTestCaseRunner from '../components/TestCaseRunner'

import { removeComments } from './object'

export const routes = [
  {
    path: '/exam1',
    title: 'How to determine if a variable is a string',
    content: getCodeContent(() => import(/* webpackChunkName: "exam1" */ '../exams/exam1/question.txt')),
    contentValidator(code) {
      return /function\s*isString\(value\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*isString\(value\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case1" */ '../exams/exam1/testcase'))
  },
  {
    path: '/exam2',
    title: 'Complete a simple currying function',
    content: getCodeContent(() => import(/* webpackChunkName: "exam2" */ '../exams/exam2/question.txt')),
    contentValidator(code) {
      return /function\s*currying\(func\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*currying\(func\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case2" */ '../exams/exam2/testcase'))
  },
  {
    path: '/exam3',
    title: 'Complete a duplicate function',
    content: getCodeContent(() => import(/* webpackChunkName: "exam3" */ '../exams/exam3/question.txt')),
    contentValidator(code) {
      return /function\s*duplicate\(array\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*duplicate\(array\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case3" */ '../exams/exam3/testcase'))
  },
  {
    path: '/exam4',
    title: 'Complete a map function',
    content: getCodeContent(() => import(/* webpackChunkName: "exam4" */ '../exams/exam4/question.txt')),
    contentValidator(code) {
      return /function\s*map\(arr,\s*func,\s*ctx\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*map\(arr,\s*func,\s*ctx\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case4" */ '../exams/exam4/testcase'))
  },
  {
    path: '/exam5',
    title: 'Complete a value function',
    content: getCodeContent(() => import(/* webpackChunkName: "exam5" */ '../exams/exam5/question.txt')),
    contentValidator(code) {
      return /function\s*value\(anything\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*value\(anything\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case5" */ '../exams/exam5/testcase'))
  },
  {
    path: '/exam6',
    title: 'Complete a camelcase function',
    content: getCodeContent(() => import(/* webpackChunkName: "exam6" */ '../exams/exam6/question.txt')),
    contentValidator(code) {
      return /function\s*camelcase\(str\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*camelcase\(str\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case6" */ '../exams/exam6/testcase'))
  },
  {
    path: '/exam7',
    title: 'Complete a thunkify function',
    content: getCodeContent(() => import(/* webpackChunkName: "exam7" */ '../exams/exam7/question.txt')),
    contentValidator(code) {
      return /function\s*thunkify\(func\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*thunkify\(func\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case7" */ '../exams/exam7/testcase'))
  },
  {
    path: '/exam8',
    title: 'Complete a times (multiple build) function',
    content: getCodeContent(() => import(/* webpackChunkName: "exam8" */ '../exams/exam8/question.txt')),
    contentValidator(code) {
      return /function\s*times\(n,\s*func\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*times\(n,\s*func\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case8" */ '../exams/exam8/testcase'))
  },
  {
    path: '/exam9',
    title: 'Complete a DI (Dependency Injection) class',
    content: getCodeContent(() => import(/* webpackChunkName: "exam9" */ '../exams/exam9/question.txt')),
    inputFuncName: 'DI',
    contentValidator(code) {
      return /class\s*DI\s*{[\s\S]*register\(name,\s*instance\)\s*{[\s\S]*}[\s\S]*run\(arr\)\s*{[\s\S]*}[\s\S]*}/.test(
        code
      )
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      // eslint-disable-next-line
      return /^class\s*DI\s*{[\s\S]*register\(name,\s*instance\)\s*{[\s\S]*}[\s\S]*run\(arr\)\s*{[\s\S]*}[\s\S]*}$/.test(
        realCode
      )
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case9" */ '../exams/exam9/testcase'))
  },
  {
    path: '/exam10',
    title: 'Complete a difference function',
    content: getCodeContent(() => import(/* webpackChunkName: "exam10" */ '../exams/exam10/question.txt')),
    contentValidator(code) {
      return /function\s*difference\(src,\s*target\)\s*{[\s\S]*}/.test(code)
    },
    contentIntegrityValidator(code) {
      const realCode = removeComments(code)
      return /^function\s*difference\(src,\s*target\)\s*{[\s\S]*}$/.test(realCode)
    },
    testCase: getTestCaseRunner(() => import(/* webpackChunkName: "case10" */ '../exams/exam10/testcase'))
  }
]
